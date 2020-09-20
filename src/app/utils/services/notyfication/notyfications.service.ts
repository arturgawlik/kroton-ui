import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzMessageDataOptions } from 'ng-zorro-antd/message/typings';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzNotificationDataOptions } from 'ng-zorro-antd/notification/typings';

@Injectable({
  providedIn: 'root',
})
export class NotyficationsService {

  private notificationSettings: NzNotificationDataOptions = {
    nzPlacement: 'bottomRight'
  }

  constructor(private notification: NzNotificationService, private message: NzMessageService) {
  }

  info(title: string, content?: string, type?: 'message' | 'notyfication') {
    if (!type || type === 'message') {
      this.message.info(`${title} ${content ?? ''}`, );
    } else {
      this.notification.info(title, content, this.notificationSettings);
    }
  }

  error(title: string, content?: string, type?: 'message' | 'notyfication') {
    if (!type || type === 'message') {
      this.message.error(`${title} ${content ?? ''}`);
    } else {
      this.notification.error(title, content, this.notificationSettings);
    }
  }

  warning(title: string, content?: string, type?: 'message' | 'notyfication' ) {
    if (!type || type === 'message') {
      this.message.warning(`${title} ${content ?? ''}`);
    } else {
      this.notification.warning(title, content, this.notificationSettings);
    }
  }

}
