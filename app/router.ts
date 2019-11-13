'use strict';
import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/api/ping', controller.home.index);
  /** TEST: unregister consul */
  // router.get('/api/unregister', controller.home.unregister);


  /**
   * TODORegular
   */
  router.get('/api/todoregular', controller.todoRegular.list);
  router.get('/api/todoregular/:id', controller.todoRegular.findById);
  router.post('/api/todoregular', controller.todoRegular.create);
  router.del('/api/todoregular/:id', controller.todoRegular.deleteById);
  router.post('/api/todoregular/:id', controller.todoRegular.updateById);

  /**
   * TODO
   */
  router.get('/api/todo', controller.todo.list);
  router.post('/api/todo/statistics', controller.todo.statistics);
  router.get('/api/todo/:id', controller.todo.findById);
  router.post('/api/todo', controller.todo.create);
  router.post('/api/todo/toggleall', controller.todo.toggleAllTodo);
  router.post('/api/todo/deletecomplete', controller.todo.deleteAllCompletedTodo);
  router.post('/api/todo', controller.todo.create);
  router.del('/api/todo/:id', controller.todo.deleteById);
  router.post('/api/todo/:id', controller.todo.updateById);

};
