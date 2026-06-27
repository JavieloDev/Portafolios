import {Component, inject} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive} from "@angular/router";
import {filter, Subscription} from "rxjs";
import {NavItem} from "../../models/navItems.model";
import {SafeHtmlPipe} from "../../../shared/pipe/sanitalizer.pipe";
import {navOptions} from "./sidebarOptions";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [
    RouterLink,
    RouterLinkActive,
    SafeHtmlPipe
  ],
  standalone: true
})
export class SidebarComponent {
  private router = inject(Router)

  private routerSubscription!: Subscription;

  navItems: NavItem[] = navOptions

  /**
   * Mobile navigation items array.
   * Reordered version of desktop navigation items for mobile layout.
   * Order: about, projects, home, skills, contact
   */
  navItemsMobile: NavItem[] = [
    this.navItems[1],
    this.navItems[2],
    this.navItems[0],
    this.navItems[3],
    this.navItems[4]
  ];

  /**
   * Currently selected navigation item.
   */
  selectedItem: NavItem = this.navItems[0];

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSelectedItem();
      });
    this.updateSelectedItem();
  }

  /**
   * Updates the selected navigation item based on the current URL.
   * Matches the current URL against each navigation item's path.
   * - For items with `exact: true`, requires an exact match with the URL.
   * - For items with `exact: false`, checks if the URL starts with the item's path.
   */
  private updateSelectedItem(): void {
    const currentUrl = this.router.url;

    const matchedItem = this.navItems.find(item => {
      if (item.exact) {
        return currentUrl === item.path;
      } else {
        return currentUrl.startsWith(item.path);
      }
    });

    if (matchedItem) {
      this.selectedItem = matchedItem;
    }
  }

  /**
   * Updates the selected item when a user clicks on a navigation item.
   *
   * @param item - The navigation item that was clicked
   */
  selectedItems(item: NavItem): void {
    this.selectedItem = item;
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
