import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Directive({
  selector: '[appShowWhenOneOfSizes]'
})
export class ShowWhenOneOfSizeDirective implements OnInit  {

  sizes: string[] = [];
  hasView: boolean = false;

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    public mediaObserver: MediaObserver) {

  }
  
  ngOnInit(): void {
    this.mediaObserver.media$.subscribe(c => {
      if (!this.sizes.length)
        return;
        
      if (this.sizes.some(x => x === c.mqAlias) && !this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (!this.sizes.some(x => x === c.mqAlias) &&  this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
      }
    });
  }

  @Input('appShowWhenOneOfSizes') set avaibleSizes(sizes: string[]) {
    this.sizes = sizes;
  }



}
