export default class WebWorker {
  constructor(worker){
    console.log('worker :', worker);
    const code = worker.toString();
    const blob = new Blob(['('+code+')()']);
    return new Worker(URL.createObjectURL(blob));
  }
}