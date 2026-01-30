// Minimal process shim for browser environments (for Liferay)
try{
  if(typeof window !== 'undefined'){
    window.process = window.process || { env: { NODE_ENV: 'production' } };
  }
}catch(e){/* noop */}
