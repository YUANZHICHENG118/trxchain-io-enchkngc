(function () {
    'use strict';


    const ABI = [{"outputs":[{"type":"uint256"}],"constant":true,"name":"PERCENTS_DIVIDER","stateMutability":"View","type":"Function"},{"payable":true,"inputs":[{"name":"referrer","type":"address"}],"name":"invest","stateMutability":"Payable","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserDividends","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"type":"address"}],"name":"userWithdraw","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"TEN_TIME_STEP","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserAvailable","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"type":"address"}],"name":"vipWithdraw","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserPercentRate","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getPerformance","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserDeposits","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"TIME_STEP","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferrer","stateMutability":"View","type":"Function"},{"name":"withdraw","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"totalWithdrawn","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"totalInvested","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"type":"uint256"}],"name":"REFERRAL_PERCENTS","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"BASE_PERCENT","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getSeniority","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"CONTRACT_BALANCE_STEP","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"getContractBalance","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"startTime","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"type":"uint256"}],"name":"VIP_LEVEL_PERCENT","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"totalDeposits","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserTotalDeposits","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"type":"uint256"}],"name":"levelSeniority","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"RATE_ADDR","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"owner","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getCompoundInterest","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"isActive","stateMutability":"View","type":"Function"},{"outputs":[{"name":"checkpoint","type":"uint256"},{"name":"referrer","type":"address"},{"name":"bonus","type":"uint256"},{"name":"referCount","type":"uint256"},{"name":"referAmout","type":"uint256"},{"name":"directReferralReward","type":"uint256"},{"name":"teamRevenueReward","type":"uint256"},{"name":"teamNumber","type":"uint256"}],"constant":true,"inputs":[{"type":"address"}],"name":"users","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserAmountOfDeposits","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"defaultReferral","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"DAILY_INVEST_RESTRICTIONS","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"totalUsers","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"},{"type":"uint256"},{"type":"uint256"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"getUserDepositInfo","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"type":"uint256"}],"name":"VIP_LEVEL","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserCheckpoint","stateMutability":"View","type":"Function"},{"inputs":[{"name":"addr","type":"address"}],"name":"testGuiji","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"INVEST_MIN_AMOUNT","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferralBonus","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserTotalWithdrawn","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"getContractBalanceRate","stateMutability":"View","type":"Function"},{"stateMutability":"Nonpayable","type":"Constructor"},{"inputs":[{"name":"user","type":"address"}],"name":"Newbie","type":"Event"},{"inputs":[{"indexed":true,"name":"user","type":"address"},{"name":"amount","type":"uint256"}],"name":"NewDeposit","type":"Event"},{"inputs":[{"indexed":true,"name":"user","type":"address"},{"name":"amount","type":"uint256"}],"name":"Withdrawn","type":"Event"},{"inputs":[{"indexed":true,"name":"referrer","type":"address"},{"indexed":true,"name":"referral","type":"address"},{"indexed":true,"name":"level","type":"uint256"},{"name":"amount","type":"uint256"}],"name":"RefBonus","type":"Event"},{"inputs":[{"indexed":true,"name":"user","type":"address"},{"name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"Event"}]

    let contract, odometer;

    let VueTRON = {
        data() {
            return {
                tron: {
                    tronWeb: false,
                    auth: false,
                    account: ''
                }
            };
        },
        created() {
            let self = this,
                tries = 0;

            setTimeout(function initTimer() {
                if (!window.tronWeb) return ++tries < 50 ? setTimeout(initTimer, 100) : null;

                self.tron.tronWeb = !!window.tronWeb;

                window.tronWeb.on('addressChanged', function () {
                    self.tron.account = window.tronWeb.defaultAddress.base58;
                });

                setTimeout(function chechAuth() {
                    self.tron.auth = window.tronWeb && window.tronWeb.ready;
                    if (!self.tron.auth) setTimeout(chechAuth, 200);
                    else self.tron.account = window.tronWeb.defaultAddress.base58;
                }, 200);
            }, 100);
        },
        methods: {
            getTronWeb() {
                return new Promise((resolve, reject) => {
                    window.tronWeb ? resolve(window.tronWeb) : reject('TronWeb not found');
                });
            },
            awaitTx(tx) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve();
                    }, 8000);
                });
            }
        }
    };

    Vue.directive('timer', {
        bind(el, binding) {
            el.__time = binding.value;
            el.__timer = setInterval(() => {
                let f = v => (v < 10 ? '0' + v : v),
                    o = Math.abs(el.__time + 86400000 * 10000 - Date.now()),
                    d = Math.floor(o / 86400000),
                    h = Math.floor((o - d * 86400000) / 3600000),
                    m = Math.floor((o - d * 86400000 - h * 3600000) / 60000),
                    s = Math.floor((o - d * 86400000 - h * 3600000 - m * 60000) / 1000);

                el.innerText = el.__time > 0 ? f(h) + ':' + f(m) + ':' + f(s) : '00:00:00';
            }, 1000);
        },
        update(el, binding) {
            el.__time = binding.value;
        },
        unbind(el, binding) {
            clearInterval(el.__timer);
        }
    });

    // Main
    new Vue({
        mixins: [VueTRON],
        el: '#App',
        data: {
            tab: 'main',
            contract_address: 'TPbgonybTSZZBT6paNn4M9ZxkJBqHGisxM',
            defaultRef: 'TF4RMrYGaStJWooM2vx37epxkhQikpJCiZ',
            upline: undefined,
            ref: '',
            contract: {
                balance: 0,
                total_users: 0,
                total_deposited: 0,
                total_withdraw: 0,
                pool_balance: 0,
                pool_last_draw: 0,
                pool_lider: 0
            },
            user: {
                balance: 0,
                payout: 0,
                upline: '',
                referrals: 0,
                payouts: 0,
                direct_bonus: 0,
                pool_bonus: 0,
                match_bonus: 0,
                deposit_amount: 0,
                deposit_time: 0,
                total_deposits: 0,
                total_payouts: 0,
                total_structure: 0,
                totalInvest: 0,// 总投资
                dc: 0,
                a: 0,
                b: 0,
                c: 0,
                d: 0,
                e: 0,
                f: 0,
                g: 0,
                h: 0,
                i: 0,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                tt: 0,
            },
            pool_top: [],
            rates: {},
            deposit_amount: 100,
            upmodal: {
                show: false,
                upline: document.querySelector('meta[name="upline"]').content,
                upline_edit: '',
                edit: false
            }
        },
        mounted() {
            // Upline
            var m = (location.hash + '; ' + document.cookie).match(/ref=(T[1-9A-HJ-NP-Za-km-z]{33})/i);
            if (m) {
                document.cookie = "ref=" + m[1] + "; path=/; expires=" + (new Date(new Date().getTime() + 86400 * 365 * 1000)).toUTCString();
                this.upline = this.upmodal.upline = m[1];
            }

            // Rates
            fetch('https://api.smartcontract.ru/gateway/rates_usd.json').then(r => r.json()).then(r => {
                this.rates = r.data;
                //this.contract.balance = parseFloat(document.querySelector('meta[name="sc.balance"]').content);
            });

            if (!document.cookie.match(/coopolice=1/)) {
                this.notice('This website uses cookies for functionality, analytics and advertising purposes as described in our Privacy Policy. If you agree to our use of cookies, please continue to use our site.<br/><br/><a href="javascript:void()" style="color:#fff; text-decoration:none"><b>OK</b></a>', '007eff', 0)
                    .then(() => {
                        document.cookie = 'coopolice=1; Max-Age=31536000; path=/';
                    });
            }

            $(window).on('focus', () => {
                this.updateInfo();
            });
        },
        watch: {
            'tron.account'() {
                this.getTronWeb().then(tronWeb => {
                    contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));
                    this.updateInfo();
                });
            },
            'contract.balance'() {
                if (!odometer) {
                    odometer = new Odometer({
                        el: this.$refs.odometer,
                        format: 'd,ddd,ddd',
                        theme: 'digital'
                    });
                }

                odometer.update(parseInt(this.contract.balance * this.rates.trx));
            },
            deposit_amount(v, o) {
                this.deposit_amount = parseFloat(v);
            }


        },
        methods: {
            team() {
                alert("Angelina1659")
            },
            // colors: primary = 007eff; success = 4caf50; warning = fb8c00; error = e53935
            notice(msg, color = '007eff', time = 3000) {
                return new Promise((resolve, reject) => {
                    let wrap = $('<div style="box-sizing:border-box; position:fixed; left:calc(50% - 160px); box-shadow:0 5px 25px rgba(0,0,0,0.2); width:320px; top:40px; background:#' + (color ? color : '007eff') + '; border-radius:10px; color:#fff; padding:20px 20px; text-transform:none; font:16px/1.2 Tahoma, sans-serif; cursor:pointer; z-index:999999; text-align:center;">' + msg + '</div>')
                        .on('click', () => {
                            wrap.remove();
                            resolve();
                        })
                        .appendTo('body');
                    if (time > 0) setTimeout(() => {
                        wrap.remove();
                    }, time);
                });
            },
            copyText(value) {
                let s = document.createElement('input');
                s.value = value;
                document.body.appendChild(s);

                if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
                    s.contentEditable = true;
                    s.readOnly = false;
                    let range = document.createRange();
                    range.selectNodeContents(s);
                    let sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                    s.setSelectionRange(0, 999999);
                }
                else s.select();

                try {
                    document.execCommand('copy');
                    this.notice('Copied!', '4caf50');
                }
                catch (err) {
                    this.notice('Copy error', 'e53935');
                }

                s.remove();
            },
            safe(value) {
                return this.tron.account ? value : '---';
            },
            getFormattedDate(date) {
                let hour = ('0' + date.getHours()).slice(-2);
                let minute = ('0' + date.getMinutes()).slice(-2);
                let day = ('0' + date.getDate()).slice(-2);
                let month = ('0' + (date.getMonth() + 1)).slice(-2);
                let year = date.getFullYear();
                return hour + ':' + minute + ' ' + day + '.' + month + '.' + year
            },
            updateInfo() {
                this.getTronWeb().then(tronWeb => {

                    tronWeb.trx.getBalance(this.contract_address).then(balance => {
                        this.contract.balance = parseInt(tronWeb.fromSun(balance));
                    });

                    tronWeb.trx.getBalance(this.tron.account).then(balance => {
                        this.user.balance = parseInt(tronWeb.fromSun(balance));
                    });


                    // 存款总数
                    contract.totalInvested().call().then(res => {
                        this.contract.total_deposited = parseInt(tronWeb.fromSun(res));
                    });

                    // 总人数
                    contract.totalUsers().call().then(res => {
                        this.contract.total_users = parseInt(res);
                    });

                    // 总提现
                    contract.totalWithdrawn().call().then(res => {
                        this.contract.total_withdraw = tronWeb.fromSun(res);
                    });

                    // 用户总投资
                    contract.getUserDeposits(this.tron.account).call().then(res => {
                        this.user.totalInvest = tronWeb.fromSun(res);
                    });
                    // 可提取
                    contract.getUserAvailable(this.tron.account).call().then(res => {
                        this.user.a = tronWeb.fromSun(res);
                    });


                    // 10 天不提取收益
                    contract.getCompoundInterest(this.tron.account).call().then(res => {
                        this.user.tt = tronWeb.fromSun(res);
                    });


                    // 推荐数据
                    contract.users(this.tron.account).call().then(res => {

                        this.user.r1 = res["referCount"];
                        //this.user.r2 = tronWeb.fromSun(res["referAmout"]);
                        this.user.r3 = tronWeb.fromSun(res["directReferralReward"]);
                        this.user.r4 = tronWeb.fromSun(res["teamRevenueReward"]);
                        this.user.r5 = res["teamNumber"];
                        this.ref = tronWeb.address.fromHex(res["referrer"]);


                    });


                    // 推荐人业绩
                    contract.getPerformance(this.tron.account).call().then(res => {

                        this.user.r2 = tronWeb.fromSun(res);


                    });


                    try {
                        // 总领取

                        contract.userWithdraw(this.tron.account).call().then(res => {
                            this.user.c = tronWeb.fromSun(res);
                        });
                    } catch (e) {

                    }


                    // 合同奖金
                    // contract.getContractBalanceRate().call().then(res => {
                    //     // this.user.c = tronWeb.fromSun(res);
                    //     let contractBalanceRate = tronWeb.toDecimal(res);
                    //     contractBalanceRate = (contractBalanceRate) / 10;
                    //     contractBalanceRate = contractBalanceRate.toFixed(2);
                    //     this.user.i = contractBalanceRate;
                    //
                    // });

                    // 静态收益
                    contract.getUserDividends(this.tron.account).call().then(res => {
                        // let contractBalanceRate = tronWeb.toDecimal(res);
                        // contractBalanceRate = (contractBalanceRate) / 1000000;
                        // contractBalanceRate = contractBalanceRate.toFixed(2);
                        this.user.i = tronWeb.fromSun(res);

                    });

                    // 动态奖励
                    contract.getUserReferralBonus(this.tron.account).call().then(res => {
                        this.user.dc = tronWeb.fromSun(res);

                    });

                    // 用户奖金
                    contract.getUserPercentRate(this.tron.account).call().then(res => {

                        let userPercentRate = tronWeb.toDecimal(res);
                        userPercentRate = userPercentRate / 10;
                        userPercentRate = userPercentRate.toFixed(1);
                        this.user.d = userPercentRate;


                        var basicPercentRate = 1;
                        basicPercentRate = basicPercentRate.toFixed(1);

                        this.user.g = basicPercentRate;

                        let holdPercentRate = userPercentRate - this.user.i - basicPercentRate;
                        holdPercentRate = holdPercentRate.toFixed(1);
                        this.user.h = holdPercentRate;
                    });

                    // 存款次数
                    contract.getUserAmountOfDeposits(this.tron.account).call().then(res => {
                        this.user.e = parseInt(res);
                        if (this.user.e > 0) {

                            contract.getUserDepositInfo(this.tron.account, this.user.e - 1).call().then(res => {
                                let userLastDepositTime = tronWeb.toDecimal(res[2]);

                                let userLastDepositTimeFormatted = this.getFormattedDate(new Date(userLastDepositTime * 1000));
                                this.user.f = userLastDepositTimeFormatted;

                            });
                        }
                    });


                    // contract.contractInfo().call().then(res => {
                    //     //this.contract.total_withdraw = parseInt(tronWeb.fromSun(res._total_withdraw));
                    //     this.contract.pool_last_draw = parseInt(res._pool_last_draw);
                    //     this.contract.pool_balance = parseInt(tronWeb.fromSun(res._pool_balance));
                    //     this.contract.pool_lider = parseInt(tronWeb.fromSun(res._pool_lider));
                    // });

                    // contract.payoutOf(this.tron.account).call().then(res => {
                    //     this.user.payout = parseInt(tronWeb.fromSun(res.payout));
                    //     if(this.user.payout > 1e60) this.user.payout = 0;
                    // });
                    //
                    // contract.userInfo(this.tron.account).call().then(res => {
                    //     this.user.upline = res.upline.substr(2) != '0000000000000000000000000000000000000000' ? tronWeb.address.fromHex(res.upline) : '';
                    //     this.user.deposit_time = parseInt(res.deposit_time);
                    //     this.user.deposit_amount = parseInt(tronWeb.fromSun(res.deposit_amount));
                    //     this.user.payouts = parseInt(tronWeb.fromSun(res.payouts));
                    //     this.user.direct_bonus = parseInt(tronWeb.fromSun(res.direct_bonus));
                    //     this.user.pool_bonus = parseInt(tronWeb.fromSun(res.pool_bonus));
                    //     this.user.match_bonus = parseInt(tronWeb.fromSun(res.match_bonus));
                    // });
                    //
                    // contract.userInfoTotals(this.tron.account).call().then(res => {
                    //     this.user.referrals = parseInt(res.referrals);
                    //     this.user.total_deposits = parseInt(tronWeb.fromSun(res.total_deposits));
                    //     this.user.total_payouts = parseInt(tronWeb.fromSun(res.total_payouts));
                    //     this.user.total_structure = parseInt(res.total_structure);
                    // });
                });
            },
            getPoolTopInfo() {
                this.getTronWeb().then(tronWeb => {
                    contract.poolTopInfo().call().then(res => {
                        this.pool_top = [];
                        for (let i = 0; i < res.addrs.length; i++) {
                            if (res.addrs[i].substr(2) == '0000000000000000000000000000000000000000') break;

                            this.pool_top.push({
                                address: tronWeb.address.fromHex(res.addrs[i]),
                                deposit: res.deps[i] / 1e6
                            });
                        }
                    });
                });
            },
            structure() {
                fetch('/tree/getLink/?address=' + tronWeb.address.toHex(this.tron.account)).then(r => r.json()).then(res => {
                    window.open(res.link);
                });
            },
            sendTx(name, address) {
                this.getTronWeb().then(tronWeb => {
                    (address ? tronWeb.contract(ABI, tronWeb.address.toHex(address)) : contract)[name]().send().then(tx => {
                        this.notice('Transaction was successfully sent. Wait confirming..', '4caf50');
                        this.awaitTx(tx).then(() => {
                            this.updateInfo();
                        });
                    });
                });
            },
            deposit(upline) {


                let auto_upline = false;
                if (!(this.deposit_amount >= 0.1)) return this.notice('Zero amount', 'fb8c00');
                //if(this.user.deposit_amount > 0 && Math.floor(this.user.deposit_amount * 3.1 - this.user.payouts) > 0) return this.notice('You did not receive all the income 310%. You need to get ' + (this.user.deposit_amount * 3.1 - this.user.payouts).toFixed(2) + ' TRX.<br/>Make a new deposit when you receive all the income.', 'fb8c00');
                if (!this.tron.account) return this.notice('To join the project you need to use the Tron wallet. Read more <a href="https://etherchain.io/tutorial">here</a>', 'fb8c00');
                //if(this.user.balance < this.deposit_amount) return this.notice('To join the project you need to have TRX in your wallet.<br/>If you just received funds to your wallet, wait 1 minute for network confirmation and try again', 'fb8c00');
                if (this.user.deposit_amount > 0 && this.deposit_amount < this.user.deposit_amount) return this.notice('You are trying to make a deposit less than your last deposit<br/>Use an amount no less than the previous deposit', 'fb8c00');

                // if (this.user.total_deposits == 0) {
                //     if (upline) {
                //         if (upline.toLowerCase() == this.tron.account.toLowerCase()) {
                //             upline = 'TK7PMHRgTy7rwqeUia2SwckGjfigGkhjLh';
                //             auto_upline = true;
                //         }
                //         this.upline = upline;
                //     }
                //     //else return this.upmodal.show = true;
                // }
                // else if (!this.upline) this.upline = 'TK7PMHRgTy7rwqeUia2SwckGjfigGkhjLh';

                this.getTronWeb(this.upline || this.defaultRef).then(tronWeb => {

                    contract.invest(this.upline || this.defaultRef).send({
                        callValue: tronWeb.toSun(this.deposit_amount.toFixed(2))
                    }).then(tx => {
                        this.notice('Transaction was successfully sent. Wait confirming..', '4caf50');
                        this.awaitTx(tx).then(() => {
                            // if(auto_upline) fetch('/auto_upline/?address=' + this.tron.account + '&upline=' + this.upline);
                            this.updateInfo();
                        });
                    });
                });
            },
            withdraw() {
                if (!this.tron.account) return this.notice('To join the project you need to use the Tron wallet. Read more <a href: https://etherchain.io/tutorial/>here</a>', 'fb8c00');
                if (this.user.a < 0.01) return this.notice('To withdraw funds, wait when the amount of income exceeds 0.01 TRX (because of gas fee)', 'fb8c00');
                //if (this.user.payouts >= this.user.deposit_amount * 3.1) return this.notice('You have reached the 310% limit<br/>To get income again make a new deposit', 'fb8c00');

                this.getTronWeb().then(tronWeb => {
                    contract.withdraw().send({callValue: 0}).then(tx => {
                        this.notice('Transaction was successfully sent. Wait confirming..', '4caf50');
                        this.awaitTx(tx).then(() => {
                            this.updateInfo();
                        });
                    });
                });
            }
        }
    });
})();
