export default class WebWorker {
  constructor(worker){
    console.log('worker :', worker);
    const code = worker.toString();
    const blob = new Blob(['('+code+')()']);
    return new window.Worker(URL.createObjectURL(blob));
  }
}