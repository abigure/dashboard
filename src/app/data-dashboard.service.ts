import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataDashboardService {

  constructor() { }

  data_dashboard = [
    { id: '1',
      theme_cls: 'panel-primary',
      icon_cls: 'fa-comments',
      msg_count: '26',
      panel_title: 'New Comments!'
    },
    { id: '2',
      theme_cls: 'panel-green',
      icon_cls: 'fa-tasks',
      msg_count: '12',
      panel_title: 'New Tasks!'
    },
    { id: '3',
      theme_cls: 'panel-yellow',
      icon_cls: 'fa-shopping-cart',
      msg_count: '124',
      panel_title: 'New Orders!'
    },
    { id: '4',
      theme_cls: 'panel-red',
      icon_cls: 'fa-support',
      msg_count: '13',
      panel_title: 'Support Tickets!'
    }
  ];
  /* -- data_dashboard */
}
