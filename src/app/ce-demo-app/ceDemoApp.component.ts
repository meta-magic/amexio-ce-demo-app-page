import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AmexioGridLayoutService, GridConfig, GridConstants } from 'amexio-ng-extensions';


@Component({
  selector: 'ce-demo-app',
  templateUrl: './ceDemoApp.component.html',
  styleUrls: ['./ceDemoApp.component.css']
})
export class ceDemoAppComponent implements OnInit {
  topMenuData: any;
  amexiotechmenus: any;
  DEMO_TECH_M_URL = 'https://cedemo.amexio.org/tecmflix/';

  DEMO_FOUR_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/viewport/viewport-one';
  DEMO_FIVE_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/viewport/viewport-two';
  DEMO_SIX_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/viewport/viewport-three';

  DEMO_SEVEN_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/menu/menu-one';
  DEMO_EIGHT_URL = 'https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/menu/menu-two';
  DEMO_NINE_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/menu/menu-three';

  DEMO_VIRTUAL_URL = 'https://cedemo.amexio.org/Virtual-Scroller/#/sc';
  tempData: any;
  navmenus: any;


  gridDesktopPage2: GridConfig;
  gridTabletPage2: GridConfig;
  gridMobilePage2: GridConfig;

  gridDesktopPage3: GridConfig;
  gridTabletPage3: GridConfig;
  gridMobilePage3: GridConfig;

  gridDesktopPage4: GridConfig;
  gridTabletPage4: GridConfig;
  gridMobilePage4: GridConfig;



  facebookLoginData: any;
  navBarData: any;
  constructor(private http: HttpClient, private _gridlayoutService: AmexioGridLayoutService) {
    this.createLayouts();

    this._gridlayoutService.createLayout(this.gridDesktopPage2);
    this._gridlayoutService.createLayout(this.gridTabletPage2);
    this._gridlayoutService.createLayout(this.gridMobilePage2);

    this._gridlayoutService.createLayout(this.gridDesktopPage3);
    this._gridlayoutService.createLayout(this.gridTabletPage3);
    this._gridlayoutService.createLayout(this.gridMobilePage3);

    this._gridlayoutService.createLayout(this.gridDesktopPage4);
    this._gridlayoutService.createLayout(this.gridTabletPage4);
    this._gridlayoutService.createLayout(this.gridMobilePage4);

  }

  ngOnInit() {

    this.tempData = [
      {
        label: 'API',
        "link": "https://api.amexio.org/"
      },
      {
        label: 'GITHUB',
        "link": "https://github.com/meta-magic/amexio.github.io"


      },
      {
        label: 'NPM STATS',
        "link": "https://www.npmstats.com/"

      },
      {
        label: 'SUPPORT',
        "link": "https://amexio.tech/support"

      },
      {
        label: 'ROAD MAP',
        "link": "https://amexio.tech/roadmap"

      }
    ];

    this.amexiotechmenus = [
      {
        "text": "Products",
        "icon": "fa fa-snowflake-o fa-fw",
        "submenus": [
          {
            "text": "Amexio API",
            "link": "https://amexio.tech/amexio-api"
          },
          {
            "text": "Amexio D3 Charts",
            "link": " https://amexio.tech/amexio-d3-charts"
          },
          {
            "text": "Amexio Canvas",
            "link": "https://amexio.tech/amexio-canvas"
          }, {
            "text": "Amexio Colors",
            "link": "https://amexio.tech/amexio-colors"
          }, {
            "text": "Amexio Plugins",
            "link": "https://amexio.tech/amexio-plugins-1"
          },
          {
            "text": "Amexio Demo Apps",
            "link": "http://demo.amexio.tech/"
          }
        ]
      },
      {
        "text": "Start Using",
        "icon": "fa fa-television fa-fw",
        "submenus": [
          {
            "text": "Roadmap",
            "link": "https://amexio.tech/roadmap"
          },
          {
            "text": "Support",
            "link": "https://amexio.tech/support"
          },
          {
            "text": "Pricing",
            "link": "https://amexio.tech/pricing"
          },
          {
            "text": "Quality-Assurance",
            "link": "https://amexio.tech/quality-assurance"
          },
          {
            "text": "Downloads",
            "link": "https://amexio.tech/download"
          },
          {
            "text": "License and Other Docs",
            "link": "https://amexio.tech/license-and-other-docs-1"
          },
          {
            "text": "Canvas Login (Beta)",
            "link": "https://canvas.amexio.org/"
          },
          {
            "text": "Subscribe ",
            "link": "https://canvas.amexio.org/#/user/signup"
          }
        ]
      },
      {
        "text": "Training",
        "icon": "fa fa-user fa-fw",
        "submenus": [
          {
            "text": "Component Example",
            "link": "http://demo.amexio.tech/"
          }, {
            "text": "Amexio Training",
            "link": "http://metaarivu.com/amexio-training"
          }]
      },
      {
        "text": "Case Studies",
        "icon": "fa fa-clone fa-fw",
        "submenus": [
          {
            "text": "Showcase",
            "link": "https://showcase.amexio.org/#/landingPage-app"
          },
          {
            "text": "Traffic Analysis",
            "link": "https://eedemo.amexio.org/#/home/dashboard",
            "separator": true,
            "separatorHeader": "Enterprise Edition Apps"
          },
          {
            "text": "City Analysis",
            "link": "https://eedemo.amexio.org/#/home/dashboardtwo"
          },
          {
            "text": "Movie Portal",
            "link": "https://cedemo.amexio.org/Virtual-Scroller/#/sc",
            "separator": true,
            "separatorHeader": "Creative Edition Apps"
          },
          {
            "text": "TecMFlix",
            "link": "https://cedemo.amexio.org/tecmflix/"
          },
          {
            "text": "Creative Home Page",
            "link": "https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/ce-demo-app"
          },
          {
            "text": "Components App",
            "link": "https://demo.amexio.org/se/v5.12/index.html#/home",
            "separator": true,
            "separatorHeader": "Standard Edition Apps"
          },
          {
            "text": "Insurance Portal",
            "link": "https://sedemo.amexio.org/se/insuranceportal/#/home"
          },
          {
            "text": "Shopping Portal",
            "link": "https://sedemo.amexio.org/se/shoppingportal/#/home"
          },
          {
            "text": "US Election Results",
            "link": "https://sedemo.amexio.org/se/us-election/ "
          },
          {
            "text": "NpmStats",
            "link": "https://www.npmstats.com/"
          }
        ]
      },
      {
        "text": "Engage",
        "submenus": [
          {
            "text": "Events",
            "link": "https://metamagicglobal.com/events"
          }, {
            "text": "Forums",
            "link": "http://forum.metamagicglobal.com/"
          }, {
            "text": "Blogs",
            "link": "http://blog.metamagicglobal.com/"
          }, {
            "text": "Node Package Manager",
            "link": "https://www.npmjs.com/package/amexio-ng-extensions"
          }, {
            "text": "GitHub - Source Code",
            "link": "https://github.com/meta-magic/amexio.github.io"
          }
        ]
      },
      {
        "text": "About Us",
        "submenus": [
          {
            "text": "Contact",
            "link": "https://metamagicglobal.com/contact"
          }, {
            "text": "Company",
            "link": "http://www.metamagicglobal.com/company"
          }, {
            "text": "MetaMagic",
            "link": "https://www.metamagicglobal.com/"
          }
        ]
      }
    ];
  }


  externalLink(event: any) {
    if (event.data.node.link)
      //this.document.location.href=event.data.node.link;
      window.open(event.data.node.link, '_blank');
  }


  createLayouts() {


    // PAGE 2
    this.gridDesktopPage2 = new GridConfig('page2', GridConstants.Desktop)
      .addlayout(['gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title'])
      .addlayout(['gridpage2view1', 'gridpage2view1', 'gridpage2view2', 'gridpage2view2', 'gridpage2view3', 'gridpage2view3']);

    this.gridTabletPage2 = new GridConfig('page2', GridConstants.Tablet)
      .addlayout(['gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title'])
      .addlayout(['gridpage2view1', 'gridpage2view1', 'gridpage2view1', 'gridpage2view2', 'gridpage2view2', 'gridpage2view2'])
      .addlayout(['gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3']);

    this.gridMobilePage2 = new GridConfig('page2', GridConstants.Mobile)
      .addlayout(['gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title'])
      .addlayout(['gridpage2view1', 'gridpage2view1', 'gridpage2view1', 'gridpage2view1', 'gridpage2view1', 'gridpage2view1'])
      .addlayout(['gridpage2view2', 'gridpage2view2', 'gridpage2view2', 'gridpage2view2', 'gridpage2view2', 'gridpage2view2'])
      .addlayout(['gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3']);


    // PAGE 3
    this.gridDesktopPage3 = new GridConfig('page3', GridConstants.Desktop)
      .addlayout(['gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title'])
      .addlayout(['gridpage3menu1', 'gridpage3menu1', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu3', 'gridpage3menu3']);

    this.gridTabletPage3 = new GridConfig('page3', GridConstants.Tablet)
      .addlayout(['gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title'])
      .addlayout(['gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2'])
      .addlayout(['gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3']);

    this.gridMobilePage3 = new GridConfig('page3', GridConstants.Mobile)
      .addlayout(['gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title'])
      .addlayout(['gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1'])
      .addlayout(['gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2'])
      .addlayout(['gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3']);


    // PAGE 4

    this.gridDesktopPage4 = new GridConfig('page4', GridConstants.Desktop)
      .addlayout(['gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2']);

    this.gridTabletPage4 = new GridConfig('page4', GridConstants.Tablet)
      .addlayout(['gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2'])

    this.gridMobilePage4 = new GridConfig('page4', GridConstants.Mobile)
      .addlayout(['gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1'])
      .addlayout(['gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2'])

  }


  onLoginClick(data: any) {
    this.facebookLoginData = data;
  }

  onMenuClick(data: any) {
    if (data.link) {
      window.open(data.link, '_blank');
    }
  }

  onDemoTechMClick() {
    window.open(this.DEMO_TECH_M_URL);
  }


  onViewportDemoFirstClick() {
    window.open(this.DEMO_FOUR_URL);
  }
  onViewportDemoSecondClick() {
    window.open(this.DEMO_FIVE_URL);
  }

  onViewportDemoThreeClick() {
    window.open(this.DEMO_SIX_URL);
  }
  onMenuDemoFirstClick() {
    window.open(this.DEMO_SEVEN_URL);
  }
  onMenuDemoSecondClick() {
    window.open(this.DEMO_EIGHT_URL);
  }
  onMenuDemoThreeClick() {
    window.open(this.DEMO_NINE_URL);
  }


  onVirtualScrollDemoClick() {
    window.open(this.DEMO_VIRTUAL_URL);
  }
}
