const bitcoin = require('bitcoinjs-lib');
const dotenv = require('dotenv');
const zmq = require('zeromq');
const sock = zmq.socket('sub');

dotenv.config();

// ZMQが開放されてるフルノードのアドレスとポート番号
const address = process.env.ADDRESS;

/*
** "rawblock" - Receive raw block data for new blocks.
** "hashblock" - Receive only the block hash for new blocks.
** "rawtx" - Receive raw transaction data for new transactions.
** "hashtx" - Receive only the transaction hash for new transactions.
*/

sock.connect(address);
console.log('Subscriber connected to port 28332');
// フルノードに新しくやってきたトランザクションのハッシュ値を定期購読
// sock.subscribe('hashtx');
// フルノードに新しくやってきたトランザクションの生データを定期購読
sock.subscribe('rawtx');
// フルノードに新しくやってきたブロックのハッシュ値を定期購読
// sock.subscribe('hashblock');
// フルノードに新しくやってきたブロックの生データを定期購読
// sock.subscribe('rawblock');

sock.on('message', (topic, message) => {
  if ( topic.toString() === 'rawtx' ) {
    const rawTx = message.toString('hex');
    const tx = bitcoin.Transaction.fromHex(rawTx);
    const txId = tx.getId();
    console.log('txId: ', txId);
    console.log('tx: ', tx);
  } else {
    console.log(topic.toString(), message.toString('hex'));
  }
});
