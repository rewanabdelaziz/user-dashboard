import { HttpInterceptorFn } from '@angular/common/http';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  // let modifiesReq = req
  // if(req.method == "post"){
  //   modifiesReq = req.clone({
  //     headers : req.headers.append("lang","en")
  //   })
  // }
  return next(req);
};
