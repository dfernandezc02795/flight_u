import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  langs: String[] = [];

  constructor(
    private translateService: TranslateService,
  ) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('es');
    this.translateService.addLangs(['es', 'en']);
    this.langs = this.translateService.getLangs();
  }

  ngOnInit(): void {
  }

  changeLang(lang: string) {
    this.translateService.use(lang);
  }


}
