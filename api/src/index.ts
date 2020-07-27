import dotenv from 'dotenv';
dotenv.config();

class SCVS {
  public start() {
    console.log('hello world');
  }
}

const scvs = new SCVS();
scvs.start();
