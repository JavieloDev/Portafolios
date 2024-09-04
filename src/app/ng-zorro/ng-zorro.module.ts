import {NgModule} from '@angular/core';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';
import {NzCollapseModule} from 'ng-zorro-antd/collapse';
import {NzTreeViewModule} from 'ng-zorro-antd/tree-view';
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NZ_ICONS, NzIconModule} from 'ng-zorro-antd/icon';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzCarouselModule} from 'ng-zorro-antd/carousel';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzStepsModule} from 'ng-zorro-antd/steps';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {NzProgressModule} from 'ng-zorro-antd/progress';
import {NzAffixModule} from 'ng-zorro-antd/affix';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzAutocompleteModule} from 'ng-zorro-antd/auto-complete';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import {NzRateModule} from 'ng-zorro-antd/rate';
import {NzNotificationModule} from 'ng-zorro-antd/notification';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzResultModule} from 'ng-zorro-antd/result';
import {NzCommentModule} from 'ng-zorro-antd/comment';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzCalendarModule} from 'ng-zorro-antd/calendar';
import {NzImageModule} from 'ng-zorro-antd/image';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {NzEmptyModule} from 'ng-zorro-antd/empty';
import {NzTagModule} from 'ng-zorro-antd/tag';
import {NzTimelineModule} from 'ng-zorro-antd/timeline';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzSliderModule} from 'ng-zorro-antd/slider';
import {NzMentionModule} from 'ng-zorro-antd/mention';
import {NzAnchorModule} from 'ng-zorro-antd/anchor';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

// Iconos
import * as i from './custom-icons';


@NgModule({
  exports: [
    NzSkeletonModule,
    NzTreeViewModule,
    NzBadgeModule,
    NzDrawerModule,
    NzIconModule,
    NzSwitchModule,
    NzCheckboxModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzSelectModule,
    NzCarouselModule,
    NzCollapseModule,
    NzTableModule,
    NzToolTipModule,
    NzButtonModule,
    NzInputModule,
    NzStepsModule,
    NzFormModule,
    NzDropDownModule,
    NzTabsModule,
    NzPopconfirmModule,
    NzTypographyModule,
    NzProgressModule,
    NzAffixModule,
    NzGridModule,
    NzSpinModule,
    NzSpaceModule,
    NzPaginationModule,
    NzLayoutModule,
    NzMenuModule,
    NzModalModule,
    NzListModule,
    NzAutocompleteModule,
    NzRadioModule,
    ScrollingModule,
    NzPopoverModule,
    NzRateModule,
    NzNotificationModule,
    NzCommentModule,
    NzAvatarModule,
    NzMessageModule,
    NzCalendarModule,
    NzCardModule,
    NzImageModule,
    NzPageHeaderModule,
    NzEmptyModule,
    NzTagModule,
    NzTimelineModule,
    NzSliderModule,
    NzMentionModule,
    NzDividerModule,
    NzAnchorModule,
    NzBreadCrumbModule
  ],
  imports: [
    NzResultModule,
    NzButtonModule,
    NzIconModule,
  ],
  declarations: [
  ],
  providers: [
    {
      provide: NZ_ICONS,
      // Registra tus iconos personalizados aquí
      useValue:
        [
          i.dataIcon, i.mapIcon, i.lazoPoligonoIcon, i.carteraIcon, i.localizacionIcon,
          i.mapBoundIcon, i.mapHeatIcon, i.burbujaMapIcon, i.reformaIcon, i.valoracionIcon,
          i.iaIcon, i.manualEditIcon, i.inversionIcon, i.oportunidadIcon, i.homeIcon,
          i.shareIcon, i.downloadFileIcon, i.externoLinkInmuebleIcon, i.shieldLogoIcon, i.unlockIcon, i.riseIcon,
          i.reformaAltIcon, i.arrowRightIcon, i.arrowlefttIcon, i.bathroomIcon, i.bedIcon, i.fitToWidthIcon,
          i.heartIcon, i.heartIconFill, i.nextIcon, i.notificationIcon, i.sortRemoveIcon,
          i.sortAscendingIcon, i.sortDescendingIcon, i.googleIcon, i.trashCanIcon,
          i.copyIcon, i.rotateIcon, i.editIcon, i.saveIcon, i.addIcon, i.closeIcon, i.closeOutlineIcon,
          i.closeFillIcon, i.searchIcon, i.menuVerticalIcon, i.notificationNewIcon,
          i.heartIconNone, i.informationlIcon, i.viewlIcon, i.viewOffIcon, i.legendIcon,
          i.circleFilledIcon, i.spainflagIcon, i.usaflagIcon, i.ukflagIcon, i.rsflagIcon, i.arrowRExternoIcon,
          i.operacionesIcon, i.alertIcon, i.newAlertIcon, i.squareLinkIcon, i.circularCheckIcon, i.messageIcon,
          i.opReformaIcon, i.opAdquisicionIcon, i.opArrendamientoIcon, i.scaleInIcon, i.scaleOutIcon
        ],
    }
  ]
})

export class NgZorroModule {
}
