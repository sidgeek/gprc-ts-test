PROTO_DEST=./src/proto

g:
	grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:${PROTO_DEST} \
    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
    --grpc_out=grpc_js:${PROTO_DEST} \
    -I ./proto \
    proto/*.proto

c:
	rm ${PROTO_DEST}/*.js && rm ${PROTO_DEST}/*.ts

r:
	PORT=6789 node ./dist/index.js
