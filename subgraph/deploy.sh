yq eval -i '.dataSources[0].source.address = strenv(CREATIFY_ADDRESS)' subgraph.yaml
yq eval -i '.dataSources[0].source.startBlock = strenv(CREATIFY_BLOCK_NO)' subgraph.yaml

yq eval -i '.dataSources[1].source.address = strenv(MARKETPLACE_ADDRESS)' subgraph.yaml
yq eval -i '.dataSources[1].source.startBlock = strenv(MARKETPLACE_BLOCK_NO)' subgraph.yaml


yarn create:hosted
yarn deploy:hosted 