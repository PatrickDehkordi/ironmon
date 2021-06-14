const chalk = require('chalk')
const Web3 = require('web3')

// const web3 = new Web3('wss://matic-mainnet-archive-ws.bwarelabs.com')
const web3 = new Web3('ws://127.0.0.1:8546') // your rpc here
const me2 = '0x0000000000000000000000000000000000001010' // your addres here

const d18 = Number('1000000000000000000')
const d6 = Number('1000000')
const d8  = Number('100000000')
const d12  = Number('1000000000000')
var blockNumber = 1

// ERC20 Addresses
const ETHadd = '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
const USCadd = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
const DAIadd = '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063'
const MATadd = '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
const IRNadd = '0xD86b5923F3AD7b585eD81B448170ae026c65ae9a'
const TITadd = '0xaAa5B9e6c589642f98a1cDA99B9D024B8407285A'
const aUSDadd = '0x1a13f4ca1d028320a707d99520abfefca3998b7f'

// LP Addresses
const ETHusp1 =  '0x34965ba0ac2451A34a0471F04CCa3F990b8dea27'
const ETHusp2 =  '0x6FF62bfb8c12109E8000935A6De54daD83a4f39f'
const USCusp  =  '0xCD578F016888B57F1b1e3f887f392F0159E26747'
const MATusp  =  '0xc4e595acDD7d12feC385E5dA5D43160e8A0bAC0E'
const IRNusp1 =  '0x85dE135fF062Df790A5f20B79120f17D3da63b2d'
const IRNusp2 =  '0x2bbe0f728f4d5821f84eee0432d2a4be7c0cb7fc'
const TITusp1 =  '0x35c1895DAC1e2432b320e2927b4F71a0D995602F'
const TITusp2 =  '0xA79983Daf2A92c2C902cD74217Efe3D8AF9Fba2a'
const TITusp3 =  '0xa28ade2f27b9554b01964fdce97ed643301411d9'

// Farm Addresses
const IRONfs = '0x65430393358e55A658BcdE6FF69AB28cF1CbB77a'
const IRONfq = '0xb444d596273C66Ac269C33c30Fbb245F4ba8A79d'
const IRONtreasuryAdd = '0x4a812C5EE699A40530eB49727E1818D43964324e'
const IRONvault = '0x21401319caBA905010Ee77A36f87BD176Edc4b96'

var p = { 

	run:	async function() {

	try {	
// Get Reserves
 const ETHusc = await ETHp1.methods.getReserves().call()
 const ETHdai = await ETHp2.methods.getReserves().call()
 const MATeth = await MATp.methods.getReserves().call()
 const MATirn = await TITp2.methods.getReserves().call()
 const IRN1 =   await IRNp1.methods.getReserves().call()
 const IRN2 =   await IRNp2.methods.getReserves().call()
 const TITirn = await TITp1.methods.getReserves().call()
 const TITmat = await TITp2.methods.getReserves().call()
 const TITeth = await TITp3.methods.getReserves().call()
 const USCdai = await USCp.methods.getReserves().call()

// Get Supply
const MATe20 = await MAT20.methods.totalSupply().call() /d18
const IRNe20 = await IRN20.methods.totalSupply().call() /d18
const TITe20 = await TIT20.methods.totalSupply().call() /d18

// Calculate Price
   var ETH  =  ETHusc[0]/ETHusc[1] * d12
   var ETHd = ETHdai[1]/ETHdai[0]
   var MAT  = MATeth[1]/MATeth[0] * ETH
   var MATi = MATirn[1]/MATirn[0] * IRNs
   var IRNs  = IRN1[0]/IRN1[1] * d12 
   var IRNq  = IRN2[0]/IRN2[1] * d12
   var TITi = TITirn[1]/TITirn[0] * IRNs
   var TITm = TITmat[0]/TITmat[1] * MAT
   var TITe = TITeth[0]/TITeth[1] * ETH
   var DAI  = USCdai[1]/USCdai[0] / d12 

// balanceOf
	var sum = 0
	var bMAT = await web3.eth.getBalance(me2)/d18
	var bETH = await ETH20.methods.balanceOf(me2).call() / d18
	var bIRN = await IRN20.methods.balanceOf(me2).call() / d18
	var bTIT = await TIT20.methods.balanceOf(me2).call() / d18
	var bDAI = await DAI20.methods.balanceOf(me2).call() / d18
	var bUSC = await USC20.methods.balanceOf(me2).call() / d6
   var bVault = await aUSD20.methods.balanceOf(IRONvault).call() /d6

// Iron Farm Supply
var sushi1 = IRN1[0] / d6
var quick1 = IRN2[0] / d6
var sushi2 = TITirn[1] * IRNs / d18
var sushi3 = TITmat[0] * MAT / d18
var quick4 = TITeth[0] * ETH / d18
var TVL = (sushi1 + quick1 + sushi2 + sushi3 + quick4) * 2

var poolSupply1 = await IRNp1.methods.totalSupply().call()
var pr1 = await IRNfarmS.methods.pendingReward(1,me2).call() / d18
var userInfo1 = await IRNfarmS.methods.userInfo(1,me2).call()
var USCshare1 = (userInfo1[0]/poolSupply1) * IRN1[0] / d6
var IRNshare1 = (userInfo1[0]/poolSupply1) * IRN1[1] / d18
var value1 = USCshare1 * 2

var poolSupply2 = await TITp1.methods.totalSupply().call()
var pr2 = await IRNfarmQ.methods.pendingReward(0,me2).call() / d18
var userInfo2 = await IRNfarmQ.methods.userInfo(0,me2).call()
var TITshare2 = (userInfo2[0]/poolSupply2) * TITirn[0] /d18 
var IRNshare2 = (userInfo2[0]/poolSupply2) * TITirn[1] /d18
var value2 = TITshare2 * TITm * 2

var poolSupply3 = await TITp2.methods.totalSupply().call()
var pr3 = await IRNfarmS.methods.pendingReward(0,me2).call() /d18 
var userInfo3 = await IRNfarmS.methods.userInfo(0,me2).call()
var TITshare3 = (userInfo3[0]/poolSupply3) * TITmat[1] / d18
var MATshare3 = (userInfo3[0]/poolSupply3) * TITmat[0] / d18
var value3 = TITshare3 * TITm * 2

// Iron Treasury
var effectiveCollateralRatio = await IRNtreasury.methods.effective_collateral_ratio().call()
var excessCollateralBalance = await IRNtreasury.methods.excessCollateralBalance().call()
var globalCollateralValue = await IRNtreasury.methods.globalCollateralValue().call()
var TITt = await IRNtreasury.methods.sharePrice().call() / d6
var IRNt = await IRNtreasury.methods.dollarPrice().call() / d6
var INFO = await IRNtreasury.methods.info().call()
var IRNsup = INFO[2]/d18
var IRNcol = INFO[5]/d18

sum = bMAT*MAT + bDAI + bUSC + bIRN*IRNs + bTIT*TITm 
sum = sum + 2*USCshare1 + pr1*TITm 
sum = sum + 2*TITshare2*TITm + pr2*TITm
sum = sum + 2*TITshare3*TITm + pr3*TITm

// CONSOLE.LOG
console.clear()
console.log(chalk.gray(blockNumber))
console.log(chalk.yellowBright("Iron "), chalk.green( f(IRNt)), chalk.gray("$"+f(IRNsup)))
console.log(chalk.gray("Iron S"), chalk.green(IRNs.toFixed(4)), chalk.gray("$"+f(sushi1) ))
console.log(chalk.gray("Iron Q"), chalk.green(IRNq.toFixed(4)), chalk.gray("$"+f(quick1) )) 
console.log(chalk.yellowBright("Titan "),chalk.green(f(TITt)), chalk.gray("$"+f(TITe20*TITm)))
console.log(chalk.gray("Titan S"), chalk.green( f(TITi)), chalk.gray("$"+f(sushi2) ))
console.log(chalk.gray("Titan M"), chalk.green( f(TITm)), chalk.gray("$"+f(sushi3) ))
console.log(chalk.gray("Titan E"), chalk.green( f(TITe)), chalk.gray("$"+f(quick4) ))
console.log(chalk.yellowBright("Value", "$"+f(TVL) ))
console.log(chalk.gray("aUSD", chalk.green("$"+f(bVault)) ))
console.log(chalk.gray("USDC", chalk.green("$"+f(IRNcol)) )) 
console.log(chalk.gray("ResR", chalk.green(f(IRNcol/IRNsup)) ))
console.log(chalk.gray("EffR", chalk.green(f((bVault+IRNcol)/IRNsup)) ))
console.log(chalk.gray("Exce", chalk.green(f(excessCollateralBalance/d6)) ))
console.log(chalk.cyan("IRON", chalk.magenta(f(bIRN)), chalk.red("$"+f(bIRN*IRNs))))
console.log(chalk.cyan("TITN", chalk.magenta(f(bTIT)), chalk.red("$"+f(bTIT*TITm))))
console.log(chalk.cyan("FARMs"), "$"+((pr1+pr2+pr3)*TITm).toFixed(2), chalk.red("$"+f(2*USCshare1)))
console.log(chalk.gray(f(USCshare1),  f(IRNshare1)), chalk.blue(f(pr1)))
console.log(chalk.gray(f(TITshare2),  f(IRNshare2)), chalk.blue(f(pr2)), chalk.red("$"+f(value2)))
console.log(chalk.gray(f(TITshare3),  f(MATshare3)), chalk.blue(f(pr3)), chalk.red("$"+f(value3)))

// END

}
	catch (e) { 
		console.log(chalk.redBright(e))
		}
 }
}

function newBlock() {
	const  subBlock = web3.eth.subscribe('newBlockHeaders', function(error, result){})
	.on("connected", function(subscriptionId){
	console.log("BlockHeaders Subscription");
 	})
 	.on("data", function(blockHeader){
				blockNumber = blockHeader.number
				p.run();
				
 	})
 	.on("error", console.error);
}


/*** HELPERS ***/
function f(N) {
		if 			( N > 10000 ) {
			N = parseFloat(N).toFixed(0)
      return N.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		}
   	else if ( N > 1000 ) {
      N = parseFloat(N).toFixed(0)
      return N.toString()
    }
   	else if ( N > 10) {
      N = parseFloat(N).toFixed(2)
      return N.toString()
   	}
   	else if ( N > 0 ){
      N = parseFloat(N).toFixed(3)
      return N.toString()
		}
		else return "0"
}

/***** APPLICATION BINARY INTERFACE *****/

ABI_FARM_TREASURY = [
{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},
{"type":"event","name":"PoolAdded","inputs":[{"type":"address","name":"pool","internalType":"address","indexed":true}],"anonymous":false},
{"type":"event","name":"PoolRemoved","inputs":[{"type":"address","name":"pool","internalType":"address","indexed":true}],"anonymous":false},
{"type":"event","name":"ProfitExtracted","inputs":[{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},
{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"addPool","inputs":[{"type":"address","name":"pool_address","internalType":"address"}]},
{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"collateral","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"collateralPrice","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"collateralRatioPolicy","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"collateralReserve","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"dollar","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"dollarPrice","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"effective_collateral_ratio","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"_excess","internalType":"uint256"}],"name":"excessCollateralBalance","inputs":[]},
{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"extractProfit","inputs":[{"type":"uint256","name":"_amount","internalType":"uint256"}]},
{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"globalCollateralBalance","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"globalCollateralValue","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"hasPool","inputs":[{"type":"address","name":"_address","internalType":"address"}]},
{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"}],"name":"info","inputs":[]},
{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"initialize","inputs":[{"type":"address","name":"_dollar","internalType":"address"},{"type":"address","name":"_share","internalType":"address"},{"type":"address","name":"_collateral","internalType":"address"},{"type":"address","name":"_treasuryPolicy","internalType":"address"},{"type":"address","name":"_collateralRatioPolicy","internalType":"address"},{"type":"address","name":"_collateralReserve","internalType":"address"},{"type":"address","name":"_profitSharingFund","internalType":"address"},{"type":"address","name":"_profitController","internalType":"address"}]},
{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"minting_fee","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"missing_decimals","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"oracleCollateral","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"oracleDollar","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"oracleShare","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"pools","inputs":[{"type":"address","name":"","internalType":"address"}]},
{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"pools_array","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},
{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"profitController","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"profitSharingFund","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"redemption_fee","inputs":[]},
{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"removePool","inputs":[{"type":"address","name":"pool_address","internalType":"address"}]},
{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},
{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"requestTransfer","inputs":[{"type":"address","name":"_token","internalType":"address"},{"type":"address","name":"_receiver","internalType":"address"},{"type":"uint256","name":"_amount","internalType":"uint256"}]},
{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setCollateralAddress","inputs":[{"type":"address","name":"_collateral","internalType":"address"}]},
{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setCollateralRatioPolicy","inputs":[{"type":"address","name":"_collateralRatioPolicy","internalType":"address"}]},
{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setCollateralReserve","inputs":[{"type":"address","name":"_collateralReserve","internalType":"address"}]},
{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setOracleCollateral","inputs":[{"type":"address","name":"_oracleCollateral","internalType":"address"}]},
{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setOracleDollar","inputs":[{"type":"address","name":"_oracleDollar","internalType":"address"}]},
{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setOracleShare","inputs":[{"type":"address","name":"_oracleShare","internalType":"address"}]},
{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setProfitController","inputs":[{"type":"address","name":"_profitController","internalType":"address"}]},
{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setProfitSharingFund","inputs":[{"type":"address","name":"_profitSharingFund","internalType":"address"}]},
{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setTreasuryPolicy","inputs":[{"type":"address","name":"_treasuryPolicy","internalType":"address"}]},
{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"share","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"sharePrice","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"target_collateral_ratio","inputs":[]},
{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalUnclaimedBalance","inputs":[]},
{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},
{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"treasuryPolicy","inputs":[]}]


ABI_FARM = [

{"type":"constructor","stateMutability":"nonpayable",
"inputs":[{"type":"address","name":"_rewardToken","internalType":"contract IERC20"},
			{"type":"address","name":"_masterChefFund","internalType":"address"},
			{"type":"uint256","name":"_rewardPerBlock","internalType":"uint256"},
			{"type":"uint256","name":"_startBlock","internalType":"uint256"}]},

{"type":"event",
"name":"Deposit",
"inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},
			{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},
			{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],
"anonymous":false},

{"type":"event",
"name":"EmergencyWithdraw",
"inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},
			{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},
			{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],
"anonymous":false},

{"type":"event",
"name":"OwnershipTransferred",
"inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},
			{"type":"address","name":"newOwner","internalType":"address","indexed":true}],
"anonymous":false},

{"type":"event",
"name":"Withdraw",
"inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},
			{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},
			{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],
"anonymous":false},

{"type":"function","stateMutability":"view",
"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],
"name":"BONUS_MULTIPLIER",
"inputs":[]},

{"type":"function","stateMutability":"nonpayable",
"outputs":[],
"name":"add",
"inputs":[{"type":"uint256","name":"_allocPoint","internalType":"uint256"},
			{"type":"address","name":"_lpToken","internalType":"contract IERC20"},
			{"type":"bool","name":"_withUpdate","internalType":"bool"}]},

{"type":"function","stateMutability":"nonpayable",
"outputs":[],
"name":"deposit",
"inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},
			{"type":"uint256","name":"_amount","internalType":"uint256"}]},

{"type":"function","stateMutability":"nonpayable",
"outputs":[],
"name":"emergencyWithdraw",
"inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},

{"type":"function","stateMutability":"view",
"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],
"name":"getMultiplier",
"inputs":[{"type":"uint256","name":"_from","internalType":"uint256"},
			{"type":"uint256","name":"_to","internalType":"uint256"}]},

{"type":"function","stateMutability":"nonpayable",
"outputs":[],
"name":"massUpdatePools",
"inputs":[]},

{"type":"function","stateMutability":"view",
"outputs":[{"type":"address","name":"","internalType":"address"}],
"name":"masterChefFund",
"inputs":[]},

{"type":"function","stateMutability":"view",
"outputs":[{"type":"address","name":"","internalType":"address"}],
"name":"owner",
"inputs":[]},

{"type":"function","stateMutability":"view",
"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],
"name":"pendingReward",
"inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},
		  {"type":"address","name":"_user","internalType":"address"}]},

{"type":"function","stateMutability":"view",
"outputs":[{"type":"address","name":"lpToken","internalType":"contract IERC20"},
			{"type":"uint256","name":"allocPoint","internalType":"uint256"},
			{"type":"uint256","name":"lastRewardBlock","internalType":"uint256"},
			{"type":"uint256","name":"accRewardPerShare","internalType":"uint256"}],
"name":"poolInfo",
"inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},

{"type":"function","stateMutability":"view",
"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],
"name":"poolLength",
"inputs":[]},

{"type":"function","stateMutability":"nonpayable",
"outputs":[],
"name":"renounceOwnership",
"inputs":[]},

{"type":"function","stateMutability":"view",
"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],
"name":"rewardPerBlock",
"inputs":[]},

{"type":"function","stateMutability":"view",
"outputs":[{"type":"address","name":"","internalType":"contract IERC20"}],
"name":"rewardToken",
"inputs":[]},

{"type":"function","stateMutability":"nonpayable",
"outputs":[],
"name":"set",
"inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},
			{"type":"uint256","name":"_allocPoint","internalType":"uint256"},
			{"type":"bool","name":"_withUpdate","internalType":"bool"}]},

{"type":"function","stateMutability":"nonpayable",
"outputs":[],
"name":"setMasterChefFund",
"inputs":[{"type":"address","name":"_masterChefFund","internalType":"address"}]},

{"type":"function","stateMutability":"nonpayable",
"outputs":[],
"name":"setRewardPerBlock",
"inputs":[{"type":"uint256","name":"_rewardPerBlock","internalType":"uint256"}]},
		  
{"type":"function","stateMutability":"view",
"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],
"name":"startBlock",
"inputs":[]},

{"type":"function","stateMutability":"view",
"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],
"name":"totalAllocPoint",
"inputs":[]},

{"type":"function","stateMutability":"nonpayable",
"outputs":[],
"name":"transferOwnership",
"inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},

{"type":"function","stateMutability":"nonpayable",
"outputs":[],
"name":"updatePool",
"inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},

{"type":"function","stateMutability":"view",
"outputs":[{"type":"uint256","name":"amount","internalType":"uint256"},
		  	{"type":"uint256","name":"rewardDebt","internalType":"uint256"}],
"name":"userInfo",
"inputs":[{"type":"uint256","name":"","internalType":"uint256"},
		  {"type":"address","name":"","internalType":"address"}]},

{"type":"function","stateMutability":"nonpayable",
"outputs":[],
"name":"withdraw",
"inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}, 
		  {"type":"uint256","name":"_amount","internalType":"uint256"}]}
]

ERC20 = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
]

UNIpair = [
// getReserves
{ "inputs":[],
  "name":"getReserves",
  "outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},
             {"internalType":"uint112","name":"_reserve1","type":"uint112"},
             {"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],
  "stateMutability":"view",
  "type":"function"},
// totalSupply
{ "inputs":[],
  "name":"totalSupply",
  "outputs":[{"internalType":"uint256","name":"","type":"uint256"}],
  "stateMutability":"view",
  "type":"function"},
// balanceOf
{ "inputs":[{"internalType":"address","name":"account","type":"address"}],
  "name":"balanceOf",
  "outputs":[{"internalType":"uint256","name":"","type":"uint256"}],
  "stateMutability":"view",
  "type":"function"},
]

const DAI20 = new web3.eth.Contract(ERC20, DAIadd)
const USC20 = new web3.eth.Contract(ERC20, USCadd)
const ETH20 = new web3.eth.Contract(ERC20, ETHadd)
const MAT20 = new web3.eth.Contract(ERC20, MATadd)
const IRN20 = new web3.eth.Contract(ERC20, IRNadd)
const TIT20 = new web3.eth.Contract(ERC20, TITadd)
const aUSD20 = new web3.eth.Contract(ERC20, aUSDadd)

const ETHp1 = new web3.eth.Contract(UNIpair, ETHusp1)
const ETHp2 = new web3.eth.Contract(UNIpair, ETHusp2)
const USCp  = new web3.eth.Contract(UNIpair, USCusp)
const MATp  = new web3.eth.Contract(UNIpair, MATusp)
const IRNp1  = new web3.eth.Contract(UNIpair, IRNusp1)
const IRNp2  = new web3.eth.Contract(UNIpair, IRNusp2)
const TITp1 = new web3.eth.Contract(UNIpair, TITusp1)
const TITp2 = new web3.eth.Contract(UNIpair, TITusp2)
const TITp3 = new web3.eth.Contract(UNIpair, TITusp3)

const IRNfarmS = new web3.eth.Contract(ABI_FARM, IRONfs)
const IRNfarmQ = new web3.eth.Contract(ABI_FARM, IRONfq)
const IRNtreasury = new web3.eth.Contract(ABI_FARM_TREASURY, IRONtreasuryAdd)

newBlock()
