import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';


export class AbstractComponent {

  private sub: any;

  private windowTitle = 'angular2-mdl';

  constructor(private router: Router, private route: ActivatedRoute, private titleService: Title) {
    console.log('constructor::AbstractComponent');
  }

  public ngOnInit() {
    console.log('ngOnInit::AbstractComponent');
    this.titleService.setTitle(this.windowTitle);
    this.sub = this.router.events.subscribe((event) => {
      if (this.route.snapshot.data && this.route.snapshot.data['title']) {
        const title = this.windowTitle + ' - ' + this.route.snapshot.data['title'];
        this.titleService.setTitle(title);
      } else {
        this.titleService.setTitle(this.windowTitle);
      }
    });
  }

  public ngOnDestroy() {
    console.log('ngOnDestroy::AbstractComponent');
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
