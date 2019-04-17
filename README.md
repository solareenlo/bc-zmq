# bc-zmq
ビットコインのフルノードに対してzmqを使って, 新しいトランザクションやブロックの情報を定期購読するシンプルなプログラム.
bitcoindのzmqは2019年4月現在情報を発信するだけになっている.

### Usage
```bash
git clone git@github.com:solareenlo/bc-zmq.git
cd bc-zmq
// .env_ezampleを参考に, .envを作って, その中にBitcoinのアドレスを代入する.
yarn or npm install
yarn start or npm run start
```

### References
- [Block and Transaction Broadcasting with ZeroMQ](https://github.com/bitcoin/bitcoin/blob/master/doc/zmq.md)
- [Accessing Bitcoin's ZeroMQ interface](https://bitcoindev.network/accessing-bitcoins-zeromq-interface/)
- [zeromq.js](https://github.com/zeromq/zeromq.js#readme)
- [Bitcoin JSON-RPCを叩く](https://qiita.com/erukiti/items/4c97da8f4b979dc6f31a)
- [Streaming transactions from bitcoind via ZeroMQ](https://degreesofzero.com/article/streaming-transactions-from-bitcoind-via-zeromq.html)
