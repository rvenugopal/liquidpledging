/* This is an autogenerated file. DO NOT EDIT MANUALLY */

exports.ILiquidPledgingPluginAbi = [{"constant":false,"inputs":[{"name":"pledgeManager","type":"uint64"},{"name":"pledgeFrom","type":"uint64"},{"name":"pledgeTo","type":"uint64"},{"name":"context","type":"uint64"},{"name":"amount","type":"uint256"}],"name":"afterTransfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pledgeManager","type":"uint64"},{"name":"pledgeFrom","type":"uint64"},{"name":"pledgeTo","type":"uint64"},{"name":"context","type":"uint64"},{"name":"amount","type":"uint256"}],"name":"beforeTransfer","outputs":[{"name":"maxAllowed","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]
exports.ILiquidPledgingPluginByteCode = "0x"
exports.ILiquidPledgingPluginRuntimeByteCode = "0x"
exports.LPVaultAbi = [{"constant":false,"inputs":[{"name":"_ref","type":"bytes32"},{"name":"_dest","type":"address"},{"name":"_amount","type":"uint256"}],"name":"authorizePayment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"}]
exports.LPVaultByteCode = "0x"
exports.LPVaultRuntimeByteCode = "0x"
exports.LiquidPledgingBaseAbi = [{"constant":true,"inputs":[{"name":"idPledge","type":"uint64"},{"name":"idxDelegate","type":"uint256"}],"name":"getPledgeDelegate","outputs":[{"name":"idDelegate","type":"uint64"},{"name":"addr","type":"address"},{"name":"name","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"projectId","type":"uint64"}],"name":"isProjectCanceled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numberOfPledges","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"idPledge","type":"uint64"}],"name":"getPledge","outputs":[{"name":"amount","type":"uint256"},{"name":"owner","type":"uint64"},{"name":"nDelegates","type":"uint64"},{"name":"intendedProject","type":"uint64"},{"name":"commitTime","type":"uint64"},{"name":"oldPledge","type":"uint64"},{"name":"paymentState","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"url","type":"string"},{"name":"commitTime","type":"uint64"},{"name":"plugin","type":"address"}],"name":"addDelegate","outputs":[{"name":"idxDelegate","type":"uint64"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numberOfPledgeAdmins","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"url","type":"string"},{"name":"projectAdmin","type":"address"},{"name":"parentProject","type":"uint64"},{"name":"commitTime","type":"uint64"},{"name":"plugin","type":"address"}],"name":"addProject","outputs":[{"name":"idProject","type":"uint64"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"url","type":"string"},{"name":"commitTime","type":"uint64"},{"name":"plugin","type":"address"}],"name":"addGiver","outputs":[{"name":"idGiver","type":"uint64"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"idxDelegate","type":"uint64"},{"name":"newAddr","type":"address"},{"name":"newName","type":"string"},{"name":"newUrl","type":"string"},{"name":"newCommitTime","type":"uint64"}],"name":"updateDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"idGiver","type":"uint64"},{"name":"newAddr","type":"address"},{"name":"newName","type":"string"},{"name":"newUrl","type":"string"},{"name":"newCommitTime","type":"uint64"}],"name":"updateGiver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"idAdmin","type":"uint64"}],"name":"getPledgeAdmin","outputs":[{"name":"adminType","type":"uint8"},{"name":"addr","type":"address"},{"name":"name","type":"string"},{"name":"url","type":"string"},{"name":"commitTime","type":"uint64"},{"name":"parentProject","type":"uint64"},{"name":"canceled","type":"bool"},{"name":"plugin","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"idProject","type":"uint64"},{"name":"newAddr","type":"address"},{"name":"newName","type":"string"},{"name":"newUrl","type":"string"},{"name":"newCommitTime","type":"uint64"}],"name":"updateProject","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"vault","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_vault","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idGiver","type":"uint64"}],"name":"GiverAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idGiver","type":"uint64"}],"name":"GiverUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idxDelegate","type":"uint64"}],"name":"DelegateAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idxDelegate","type":"uint64"}],"name":"DelegateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idProject","type":"uint64"}],"name":"ProjectAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idAdmin","type":"uint64"}],"name":"ProjectUpdated","type":"event"}]
exports.LiquidPledgingBaseByteCode = "0x606060405234156200001057600080fd5b60405160208062001cb0833981016040528080519150600190506200003681806200006d565b50600162000046600082620000a1565b5060028054600160a060020a031916600160a060020a039290921691909117905562000239565b8154818355818115116200009c576005028160050283600052602060002091820191016200009c9190620000d0565b505050565b8154818355818115116200009c576004028160040283600052602060002091820191016200009c919062000144565b6200014191905b808211156200013d578054600160a860020a03191681556000620000ff6001830182620001af565b6200010f600283016000620001af565b506003810180546001608860020a0319169055600481018054600160a060020a0319169055600501620000d7565b5090565b90565b6200014191905b808211156200013d57600080825560018201805467ffffffffffffffff191690556200017b6002830182620001fa565b506003810180547fffffffffffffff000000000000000000000000000000000000000000000000001690556004016200014b565b50805460018160011615610100020316600290046000825580601f10620001d75750620001f7565b601f016020900490600052602060002090810190620001f791906200021c565b50565b508054600082556003016004900490600052602060002090810190620001f791905b6200014191905b808211156200013d576000815560010162000223565b611a6780620002496000396000f3006060604052600436106100c45763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166314e7b1dc81146100c95780632101a6ad146101845780632a8ec8cc146101b85780633f657a46146101dd57806352dc7dcc1461025d5780635503d9ba1461032757806372116e921461033a5780637f61fa93146103f7578063cc19ecf7146104a4578063db7c231414610563578063eba8ba0614610620578063f6b24b1c14610778578063fbfa77cf14610835575b600080fd5b34156100d457600080fd5b6100ec67ffffffffffffffff60043516602435610864565b60405167ffffffffffffffff84168152600160a060020a038316602082015260606040820181815290820183818151815260200191508051906020019080838360005b8381101561014757808201518382015260200161012f565b50505050905090810190601f1680156101745780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b341561018f57600080fd5b6101a467ffffffffffffffff6004351661098a565b604051901515815260200160405180910390f35b34156101c357600080fd5b6101cb610a46565b60405190815260200160405180910390f35b34156101e857600080fd5b6101fd67ffffffffffffffff60043516610a51565b60405187815267ffffffffffffffff8088166020830152868116604083015285811660608301528481166080830152831660a082015260c0810182600281111561024357fe5b60ff16815260200197505050505050505060405180910390f35b341561026857600080fd5b61030a60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050833567ffffffffffffffff169360200135600160a060020a03169250610ad1915050565b60405167ffffffffffffffff909116815260200160405180910390f35b341561033257600080fd5b6101cb610cc4565b341561034557600080fd5b61030a60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052818152929190602084018383808284375094965050600160a060020a03853581169567ffffffffffffffff602082013581169650604082013516945060600135169150610cce9050565b341561040257600080fd5b61030a60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050833567ffffffffffffffff169360200135600160a060020a03169250611105915050565b34156104af57600080fd5b6105616004803567ffffffffffffffff169060248035600160a060020a0316919060649060443590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff1692506112f7915050565b005b341561056e57600080fd5b6105616004803567ffffffffffffffff169060248035600160a060020a0316919060649060443590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff1692506113e3915050565b341561062b57600080fd5b61064067ffffffffffffffff600435166114cf565b6040518089600281111561065057fe5b60ff168152600160a060020a03898116602083015267ffffffffffffffff8781166080840152861660a083015284151560c0830152831660e08201526101008282038101604083019081529160608101910189818151815260200191508051906020019080838360005b838110156106d25780820151838201526020016106ba565b50505050905090810190601f1680156106ff5780820380516001836020036101000a031916815260200191505b50838103825288818151815260200191508051906020019080838360005b8381101561073557808201518382015260200161071d565b50505050905090810190601f1680156107625780820380516001836020036101000a031916815260200191505b509a505050505050505050505060405180910390f35b341561078357600080fd5b6105616004803567ffffffffffffffff169060248035600160a060020a0316919060649060443590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff16925061169a915050565b341561084057600080fd5b610848611786565b604051600160a060020a03909116815260200160405180910390f35b60008061086f61188e565b60008061087b87611795565b9150816002016001870381548110151561089157fe5b90600052602060002090600491828204019190066008029054906101000a900467ffffffffffffffff1694506108c6856117db565b90508060000160019054906101000a9004600160a060020a03169350806001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561097a5780601f1061094f5761010080835404028352916020019161097a565b820191906000526020600020905b81548152906001019060200180831161095d57829003601f168201915b5050505050925050509250925092565b600080610996836117db565b90506000815460ff1660028111156109aa57fe5b14156109b95760009150610a40565b6002815460ff1660028111156109cb57fe5b146109d257fe5b6003810154608060020a900460ff16156109ef5760019150610a40565b600381015468010000000000000000900467ffffffffffffffff161515610a195760009150610a40565b6003810154610a3d9068010000000000000000900467ffffffffffffffff1661098a565b91505b50919050565b600054600019015b90565b600080600080600080600080610a6689611795565b805460018201546002830154600390930154919c67ffffffffffffffff9182169c50929a50808216995068010000000000000000820481169850608060020a82041696507801000000000000000000000000000000000000000000000000900460ff16945092505050565b600180549081808201610ae483826118a0565b916000526020600020906005020160006101006040519081016040528060018152600160a060020a033381166020830152604082018b9052606082018a905267ffffffffffffffff89166080830152600060a0830181905260c0830152871660e09091015291905081518154829060ff19166001836002811115610b6457fe5b021790555060208201518154600160a060020a03919091166101000261010060a860020a0319909116178155604082015181600101908051610baa9291602001906118d1565b50606082015181600201908051610bc59291602001906118d1565b50608082015160038201805467ffffffffffffffff191667ffffffffffffffff9290921691909117905560a08201518160030160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060c0820151600382018054911515608060020a0270ff000000000000000000000000000000001990921691909117905560e0820151600491909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055505067ffffffffffffffff81167f014882843f1e57bd41e0826ad1cd5e6180d4d4f76df8b12edc8b44575322d94e60405160405180910390a2949350505050565b6001546000190190565b60008067ffffffffffffffff851615610f0d57610cea856117db565b90506002815460ff166002811115610cfe57fe5b14610d0857600080fd5b6014610f03826101006040519081016040528154909190829060ff166002811115610d2f57fe5b6002811115610d3a57fe5b81526020016000820160019054906101000a9004600160a060020a0316600160a060020a0316600160a060020a03168152602001600182018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e065780601f10610ddb57610100808354040283529160200191610e06565b820191906000526020600020905b815481529060010190602001808311610de957829003601f168201915b50505050508152602001600282018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ea85780601f10610e7d57610100808354040283529160200191610ea8565b820191906000526020600020905b815481529060010190602001808311610e8b57829003601f168201915b5050509183525050600382015467ffffffffffffffff8082166020840152680100000000000000008204166040830152608060020a900460ff1615156060820152600490910154600160a060020a0316608090910152611823565b10610f0d57600080fd5b60018054925082808201610f2183826118a0565b916000526020600020906005020160006101006040519081016040528060028152600160a060020a03808c166020830152604082018e9052606082018d905267ffffffffffffffff808b1660808401528b1660a0830152600060c0830152881660e09091015291905081518154829060ff19166001836002811115610fa257fe5b021790555060208201518154600160a060020a03919091166101000261010060a860020a0319909116178155604082015181600101908051610fe89291602001906118d1565b506060820151816002019080516110039291602001906118d1565b50608082015160038201805467ffffffffffffffff191667ffffffffffffffff9290921691909117905560a08201518160030160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060c0820151600382018054911515608060020a0270ff000000000000000000000000000000001990921691909117905560e0820151600491909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055505067ffffffffffffffff82167fd7db7003e8f35149eda3d3685c2ab151ee561ad34853fdb0f4d7ecb33fff889060405160405180910390a2509695505050505050565b60018054908180820161111883826118a0565b916000526020600020906005020160006101006040519081016040528060008152600160a060020a033381166020830152604082018b9052606082018a905267ffffffffffffffff89166080830152600060a0830181905260c0830152871660e09091015291905081518154829060ff1916600183600281111561119857fe5b021790555060208201518154600160a060020a03919091166101000261010060a860020a03199091161781556040820151816001019080516111de9291602001906118d1565b506060820151816002019080516111f99291602001906118d1565b50608082015160038201805467ffffffffffffffff191667ffffffffffffffff9290921691909117905560a08201518160030160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060c0820151600382018054911515608060020a0270ff000000000000000000000000000000001990921691909117905560e0820151600491909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055505067ffffffffffffffff81167efc763def3c85dbc7bab43e314ba21264ec158217c45cf1eaf94f5ae15bc2c560405160405180910390a2949350505050565b6000611302866117db565b90506001815460ff16600281111561131657fe5b1461132057600080fd5b805433600160a060020a03908116610100909204161461133f57600080fd5b805461010060a860020a031916610100600160a060020a03871602178155600181018480516113729291602001906118d1565b50600281018380516113889291602001906118d1565b5060038101805467ffffffffffffffff191667ffffffffffffffff8481169190911790915586167f01a3bd608e7be74358498f90bd2ff305f9fdb8e94d76167f40fef03aae56620360405160405180910390a2505050505050565b60006113ee866117db565b90506000815460ff16600281111561140257fe5b1461140c57600080fd5b805433600160a060020a03908116610100909204161461142b57600080fd5b805461010060a860020a031916610100600160a060020a038716021781556001810184805161145e9291602001906118d1565b50600281018380516114749291602001906118d1565b5060038101805467ffffffffffffffff191667ffffffffffffffff8481169190911790915586167fe8da06f5d4d8fa2ef122c9fc3d5ae15379d95f5b9ebf92a5821b57705600320a60405160405180910390a2505050505050565b6000806114da61188e565b6114e261188e565b60008060008060006114f38a6117db565b80546001808301805460ff84169d5061010093849004600160a060020a03169c509394509260029181161590920260001901909116046020601f820181900481020160405190810160405280929190818152602001828054600181600116156101000203166002900480156115a95780601f1061157e576101008083540402835291602001916115a9565b820191906000526020600020905b81548152906001019060200180831161158c57829003601f168201915b50505050509650806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116485780601f1061161d57610100808354040283529160200191611648565b820191906000526020600020905b81548152906001019060200180831161162b57829003601f168201915b5050505060038301546004909301549a9c999b509799909867ffffffffffffffff8084169950680100000000000000008404169750608060020a90920460ff169550600160a060020a03169350915050565b60006116a5866117db565b90506002815460ff1660028111156116b957fe5b146116c357600080fd5b805433600160a060020a0390811661010090920416146116e257600080fd5b805461010060a860020a031916610100600160a060020a03871602178155600181018480516117159291602001906118d1565b506002810183805161172b9291602001906118d1565b5060038101805467ffffffffffffffff191667ffffffffffffffff8481169190911790915586167f035196d5942819024277421e936a2e76840abb7bb5a320924ce0a9826daeba4460405160405180910390a2505050505050565b600254600160a060020a031681565b6000805467ffffffffffffffff8316106117ae57600080fd5b6000805467ffffffffffffffff84169081106117c657fe5b90600052602060002090600402019050919050565b60015460009067ffffffffffffffff8316106117f657600080fd5b6001805467ffffffffffffffff841690811061180e57fe5b90600052602060002090600502019050919050565b60008060028351600281111561183557fe5b1461183c57fe5b8260a0015167ffffffffffffffff16151561185a5760019150610a40565b6118678360a001516117db565b9050610a3d816101006040519081016040528154909190829060ff166002811115610d2f57fe5b60206040519081016040526000815290565b8154818355818115116118cc576005028160050283600052602060002091820191016118cc919061194f565b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061191257805160ff191683800117855561193f565b8280016001018555821561193f579182015b8281111561193f578251825591602001919060010190611924565b5061194b9291506119da565b5090565b610a4e91905b8082111561194b57805474ffffffffffffffffffffffffffffffffffffffffff19168155600061198860018301826119f4565b6119966002830160006119f4565b5060038101805470ffffffffffffffffffffffffffffffffff1916905560048101805473ffffffffffffffffffffffffffffffffffffffff19169055600501611955565b610a4e91905b8082111561194b57600081556001016119e0565b50805460018160011615610100020316600290046000825580601f10611a1a5750611a38565b601f016020900490600052602060002090810190611a3891906119da565b505600a165627a7a72305820357244a6e1249b4c72fc87d4a1eb38465305b63304a393371aa098e78c02fcfa0029"
exports.LiquidPledgingBaseRuntimeByteCode = "0x6060604052600436106100c45763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166314e7b1dc81146100c95780632101a6ad146101845780632a8ec8cc146101b85780633f657a46146101dd57806352dc7dcc1461025d5780635503d9ba1461032757806372116e921461033a5780637f61fa93146103f7578063cc19ecf7146104a4578063db7c231414610563578063eba8ba0614610620578063f6b24b1c14610778578063fbfa77cf14610835575b600080fd5b34156100d457600080fd5b6100ec67ffffffffffffffff60043516602435610864565b60405167ffffffffffffffff84168152600160a060020a038316602082015260606040820181815290820183818151815260200191508051906020019080838360005b8381101561014757808201518382015260200161012f565b50505050905090810190601f1680156101745780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b341561018f57600080fd5b6101a467ffffffffffffffff6004351661098a565b604051901515815260200160405180910390f35b34156101c357600080fd5b6101cb610a46565b60405190815260200160405180910390f35b34156101e857600080fd5b6101fd67ffffffffffffffff60043516610a51565b60405187815267ffffffffffffffff8088166020830152868116604083015285811660608301528481166080830152831660a082015260c0810182600281111561024357fe5b60ff16815260200197505050505050505060405180910390f35b341561026857600080fd5b61030a60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050833567ffffffffffffffff169360200135600160a060020a03169250610ad1915050565b60405167ffffffffffffffff909116815260200160405180910390f35b341561033257600080fd5b6101cb610cc4565b341561034557600080fd5b61030a60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052818152929190602084018383808284375094965050600160a060020a03853581169567ffffffffffffffff602082013581169650604082013516945060600135169150610cce9050565b341561040257600080fd5b61030a60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050833567ffffffffffffffff169360200135600160a060020a03169250611105915050565b34156104af57600080fd5b6105616004803567ffffffffffffffff169060248035600160a060020a0316919060649060443590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff1692506112f7915050565b005b341561056e57600080fd5b6105616004803567ffffffffffffffff169060248035600160a060020a0316919060649060443590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff1692506113e3915050565b341561062b57600080fd5b61064067ffffffffffffffff600435166114cf565b6040518089600281111561065057fe5b60ff168152600160a060020a03898116602083015267ffffffffffffffff8781166080840152861660a083015284151560c0830152831660e08201526101008282038101604083019081529160608101910189818151815260200191508051906020019080838360005b838110156106d25780820151838201526020016106ba565b50505050905090810190601f1680156106ff5780820380516001836020036101000a031916815260200191505b50838103825288818151815260200191508051906020019080838360005b8381101561073557808201518382015260200161071d565b50505050905090810190601f1680156107625780820380516001836020036101000a031916815260200191505b509a505050505050505050505060405180910390f35b341561078357600080fd5b6105616004803567ffffffffffffffff169060248035600160a060020a0316919060649060443590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff16925061169a915050565b341561084057600080fd5b610848611786565b604051600160a060020a03909116815260200160405180910390f35b60008061086f61188e565b60008061087b87611795565b9150816002016001870381548110151561089157fe5b90600052602060002090600491828204019190066008029054906101000a900467ffffffffffffffff1694506108c6856117db565b90508060000160019054906101000a9004600160a060020a03169350806001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561097a5780601f1061094f5761010080835404028352916020019161097a565b820191906000526020600020905b81548152906001019060200180831161095d57829003601f168201915b5050505050925050509250925092565b600080610996836117db565b90506000815460ff1660028111156109aa57fe5b14156109b95760009150610a40565b6002815460ff1660028111156109cb57fe5b146109d257fe5b6003810154608060020a900460ff16156109ef5760019150610a40565b600381015468010000000000000000900467ffffffffffffffff161515610a195760009150610a40565b6003810154610a3d9068010000000000000000900467ffffffffffffffff1661098a565b91505b50919050565b600054600019015b90565b600080600080600080600080610a6689611795565b805460018201546002830154600390930154919c67ffffffffffffffff9182169c50929a50808216995068010000000000000000820481169850608060020a82041696507801000000000000000000000000000000000000000000000000900460ff16945092505050565b600180549081808201610ae483826118a0565b916000526020600020906005020160006101006040519081016040528060018152600160a060020a033381166020830152604082018b9052606082018a905267ffffffffffffffff89166080830152600060a0830181905260c0830152871660e09091015291905081518154829060ff19166001836002811115610b6457fe5b021790555060208201518154600160a060020a03919091166101000261010060a860020a0319909116178155604082015181600101908051610baa9291602001906118d1565b50606082015181600201908051610bc59291602001906118d1565b50608082015160038201805467ffffffffffffffff191667ffffffffffffffff9290921691909117905560a08201518160030160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060c0820151600382018054911515608060020a0270ff000000000000000000000000000000001990921691909117905560e0820151600491909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055505067ffffffffffffffff81167f014882843f1e57bd41e0826ad1cd5e6180d4d4f76df8b12edc8b44575322d94e60405160405180910390a2949350505050565b6001546000190190565b60008067ffffffffffffffff851615610f0d57610cea856117db565b90506002815460ff166002811115610cfe57fe5b14610d0857600080fd5b6014610f03826101006040519081016040528154909190829060ff166002811115610d2f57fe5b6002811115610d3a57fe5b81526020016000820160019054906101000a9004600160a060020a0316600160a060020a0316600160a060020a03168152602001600182018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e065780601f10610ddb57610100808354040283529160200191610e06565b820191906000526020600020905b815481529060010190602001808311610de957829003601f168201915b50505050508152602001600282018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ea85780601f10610e7d57610100808354040283529160200191610ea8565b820191906000526020600020905b815481529060010190602001808311610e8b57829003601f168201915b5050509183525050600382015467ffffffffffffffff8082166020840152680100000000000000008204166040830152608060020a900460ff1615156060820152600490910154600160a060020a0316608090910152611823565b10610f0d57600080fd5b60018054925082808201610f2183826118a0565b916000526020600020906005020160006101006040519081016040528060028152600160a060020a03808c166020830152604082018e9052606082018d905267ffffffffffffffff808b1660808401528b1660a0830152600060c0830152881660e09091015291905081518154829060ff19166001836002811115610fa257fe5b021790555060208201518154600160a060020a03919091166101000261010060a860020a0319909116178155604082015181600101908051610fe89291602001906118d1565b506060820151816002019080516110039291602001906118d1565b50608082015160038201805467ffffffffffffffff191667ffffffffffffffff9290921691909117905560a08201518160030160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060c0820151600382018054911515608060020a0270ff000000000000000000000000000000001990921691909117905560e0820151600491909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055505067ffffffffffffffff82167fd7db7003e8f35149eda3d3685c2ab151ee561ad34853fdb0f4d7ecb33fff889060405160405180910390a2509695505050505050565b60018054908180820161111883826118a0565b916000526020600020906005020160006101006040519081016040528060008152600160a060020a033381166020830152604082018b9052606082018a905267ffffffffffffffff89166080830152600060a0830181905260c0830152871660e09091015291905081518154829060ff1916600183600281111561119857fe5b021790555060208201518154600160a060020a03919091166101000261010060a860020a03199091161781556040820151816001019080516111de9291602001906118d1565b506060820151816002019080516111f99291602001906118d1565b50608082015160038201805467ffffffffffffffff191667ffffffffffffffff9290921691909117905560a08201518160030160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060c0820151600382018054911515608060020a0270ff000000000000000000000000000000001990921691909117905560e0820151600491909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055505067ffffffffffffffff81167efc763def3c85dbc7bab43e314ba21264ec158217c45cf1eaf94f5ae15bc2c560405160405180910390a2949350505050565b6000611302866117db565b90506001815460ff16600281111561131657fe5b1461132057600080fd5b805433600160a060020a03908116610100909204161461133f57600080fd5b805461010060a860020a031916610100600160a060020a03871602178155600181018480516113729291602001906118d1565b50600281018380516113889291602001906118d1565b5060038101805467ffffffffffffffff191667ffffffffffffffff8481169190911790915586167f01a3bd608e7be74358498f90bd2ff305f9fdb8e94d76167f40fef03aae56620360405160405180910390a2505050505050565b60006113ee866117db565b90506000815460ff16600281111561140257fe5b1461140c57600080fd5b805433600160a060020a03908116610100909204161461142b57600080fd5b805461010060a860020a031916610100600160a060020a038716021781556001810184805161145e9291602001906118d1565b50600281018380516114749291602001906118d1565b5060038101805467ffffffffffffffff191667ffffffffffffffff8481169190911790915586167fe8da06f5d4d8fa2ef122c9fc3d5ae15379d95f5b9ebf92a5821b57705600320a60405160405180910390a2505050505050565b6000806114da61188e565b6114e261188e565b60008060008060006114f38a6117db565b80546001808301805460ff84169d5061010093849004600160a060020a03169c509394509260029181161590920260001901909116046020601f820181900481020160405190810160405280929190818152602001828054600181600116156101000203166002900480156115a95780601f1061157e576101008083540402835291602001916115a9565b820191906000526020600020905b81548152906001019060200180831161158c57829003601f168201915b50505050509650806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116485780601f1061161d57610100808354040283529160200191611648565b820191906000526020600020905b81548152906001019060200180831161162b57829003601f168201915b5050505060038301546004909301549a9c999b509799909867ffffffffffffffff8084169950680100000000000000008404169750608060020a90920460ff169550600160a060020a03169350915050565b60006116a5866117db565b90506002815460ff1660028111156116b957fe5b146116c357600080fd5b805433600160a060020a0390811661010090920416146116e257600080fd5b805461010060a860020a031916610100600160a060020a03871602178155600181018480516117159291602001906118d1565b506002810183805161172b9291602001906118d1565b5060038101805467ffffffffffffffff191667ffffffffffffffff8481169190911790915586167f035196d5942819024277421e936a2e76840abb7bb5a320924ce0a9826daeba4460405160405180910390a2505050505050565b600254600160a060020a031681565b6000805467ffffffffffffffff8316106117ae57600080fd5b6000805467ffffffffffffffff84169081106117c657fe5b90600052602060002090600402019050919050565b60015460009067ffffffffffffffff8316106117f657600080fd5b6001805467ffffffffffffffff841690811061180e57fe5b90600052602060002090600502019050919050565b60008060028351600281111561183557fe5b1461183c57fe5b8260a0015167ffffffffffffffff16151561185a5760019150610a40565b6118678360a001516117db565b9050610a3d816101006040519081016040528154909190829060ff166002811115610d2f57fe5b60206040519081016040526000815290565b8154818355818115116118cc576005028160050283600052602060002091820191016118cc919061194f565b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061191257805160ff191683800117855561193f565b8280016001018555821561193f579182015b8281111561193f578251825591602001919060010190611924565b5061194b9291506119da565b5090565b610a4e91905b8082111561194b57805474ffffffffffffffffffffffffffffffffffffffffff19168155600061198860018301826119f4565b6119966002830160006119f4565b5060038101805470ffffffffffffffffffffffffffffffffff1916905560048101805473ffffffffffffffffffffffffffffffffffffffff19169055600501611955565b610a4e91905b8082111561194b57600081556001016119e0565b50805460018160011615610100020316600290046000825580601f10611a1a5750611a38565b601f016020900490600052602060002090810190611a3891906119da565b505600a165627a7a72305820357244a6e1249b4c72fc87d4a1eb38465305b63304a393371aa098e78c02fcfa0029"
exports._solcVersion = "0.4.18+commit.9cf6e910.Emscripten.clang"
exports._sha256 = "0x5c5977a4ffda7a0e713b0094a4efa3b63299b7a7910afe53c22835fd8aa46d51"
