'use strict';

module.exports = app => {
  /**
   * 应用启动前初始化工作
   */
  app.beforeStart(async () => {
    app['tips'] = 'tomato-user start...';
    console.log(app['tips']);
  });

};
