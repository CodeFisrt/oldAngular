import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {

  debugger;
  const token = 'bearer ' + localStorage.getItem('userToken');

  req = req.clone({ headers: req.headers.set('Authorization', token) });

  return next(req);
};
