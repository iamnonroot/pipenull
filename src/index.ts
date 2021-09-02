import stream from 'stream';
const writable = new stream.Writable();

writable._write = (chunk, encoding, done) => {
    done();
};

export default writable;