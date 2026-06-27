// safe-html.pipe.ts
import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

/**
 * SafeHtmlPipe
 *
 * A custom Angular pipe that sanitizes HTML content by bypassing Angular's built-in security.
 * This pipe allows rendering raw HTML strings safely in templates.
 *
 * @usageNotes
 * ```html
 * <div [innerHTML]="htmlContent | safeHtml"></div>
 * ```
 *
 * @example
 * ```TypeScript
 * // In component
 * htmlContent = '<strong>Bold text</strong>';
 * ```
 *
 * ```html
 * <!-- In template -->
 * <span [innerHTML]="htmlContent | safeHtml"></span>
 * ```
 */
@Pipe({
  standalone: true,
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  /**
   * Creates an instance of SafeHtmlPipe.
   *
   * @param sanitizer - The DomSanitizer service used to bypass security
   */
  constructor(private sanitizer: DomSanitizer) {
  }

  /**
   * Transforms a raw HTML string into a SafeHtml object that can be rendered
   * in Angular templates using innerHTML binding.
   *
   * This method uses `bypassSecurityTrustHtml()` to mark the HTML as safe,
   * bypassing Angular's built-in sanitization.
   *
   * @param value - The raw HTML string to be sanitized and rendered
   * @returns A SafeHtml object that Angular will render as HTML
   */
  transform(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
