(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{247:function(e,t,n){"use strict";n.r(t);var o=n(0),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"change-coins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#change-coins"}},[e._v("#")]),e._v(" Change coins")]),e._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#types-of-change"}},[e._v("Types of change")]),n("ul",[n("li",[n("a",{attrs:{href:"#non-coinjoin-change"}},[e._v("Non-CoinJoin change")])]),n("li",[n("a",{attrs:{href:"#first-round-coinjoin-change"}},[e._v("First round CoinJoin change")])]),n("li",[n("a",{attrs:{href:"#second-round-coinjoin-change"}},[e._v("Second round CoinJoin change")])])])]),n("li",[n("a",{attrs:{href:"#why-change-is-an-issue"}},[e._v("Why change is an issue")])]),n("li",[n("a",{attrs:{href:"#your-options-to-use-change-privately"}},[e._v("Your options to use change privately")]),n("ul",[n("li",[n("a",{attrs:{href:"#avoid-change-in-the-first-place"}},[e._v("Avoid change in the first place.")])]),n("li",[n("a",{attrs:{href:"#spend-the-change-with-another-entity-where-you-don-t-mind-if-each-of-the-two-know-that-you-transact-with-the-other-entity"}},[e._v("Spend the change with another entity, where you don't mind if each of the two know that you transact with the other entity.")])]),n("li",[n("a",{attrs:{href:"#mix-with-joinmarket"}},[e._v("Mix with JoinMarket.")])]),n("li",[n("a",{attrs:{href:"#open-a-lightning-network-channel"}},[e._v("Open a Lightning Network channel.")])]),n("li",[n("a",{attrs:{href:"#atomic-swap-into-lightning-network"}},[e._v("Atomic swap into Lightning Network")])]),n("li",[n("a",{attrs:{href:"#consolidate-several-change-coins-but-in-a-coinjoin-directly"}},[e._v("Consolidate several change coins, but in a CoinJoin directly.")])]),n("li",[n("a",{attrs:{href:"#spend-the-change-to-the-same-entity-as-in-the-initial-transaction-but-always-use-a-new-address"}},[e._v("Spend the change to the same entity as in the initial transaction, but always use a new address.")])])])])])]),n("p"),e._v(" "),n("h2",{attrs:{id:"types-of-change"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#types-of-change"}},[e._v("#")]),e._v(" Types of change")]),e._v(" "),n("h3",{attrs:{id:"non-coinjoin-change"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#non-coinjoin-change"}},[e._v("#")]),e._v(" Non-CoinJoin change")]),e._v(" "),n("p",[e._v("Let's assume you want to send 0.5 bitcoin to Alice.\nIn the "),n("code",[e._v("Send")]),e._v(" tab you select one or more UTXO, these are the inputs of the transaction.\nFor example, let's assume that you choose a red-shield / anonymity set 1 UTXO worth 2 bitcoins.\nYou put Alice's address in the "),n("code",[e._v("Receiving Address")]),e._v(" field, and set the spending "),n("code",[e._v("Amount")]),e._v(".\nIn this example, we are sending 0.5 bitcoin.\nThis will be one output of the transaction.")]),e._v(" "),n("p",[e._v("Since your chosen UTXO contained 2 bitcoins, after sending 0.5 bitcoin to Alice there will be 1.5 bitcoins remaining from the original amount.\nThis left over amount will automatically go to a new address in your wallet, and this is called the change output.")]),e._v(" "),n("p",[e._v("This leftover 1.5 bitcoins change UTXO is connected to the input UTXO of the transaction, and thus also has an "),n("code",[e._v("anonymity set")]),e._v(" of 1.\nAs a result, when you send this leftover/change coin in a new transaction, it is clear to any observer that you were part of the transaction that sent 0.5 bitcoin to Alice.")]),e._v(" "),n("p",[e._v("This process is applicable to any Bitcoin transaction where the "),n("code",[e._v("sent")]),e._v(" amount is less than the total value of the input UTXO.")]),e._v(" "),n("h3",{attrs:{id:"first-round-coinjoin-change"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#first-round-coinjoin-change"}},[e._v("#")]),e._v(" First round CoinJoin change")]),e._v(" "),n("p",[e._v("Let's say that you have a KYC red-shield "),n("code",[e._v("anonymity set 1")]),e._v(" UTXO, and you register it for a CoinJoin round.\nAfterwards, depending on the value of your UTXO in relation to the minimum CoinJoin amount and on the value of UTXOs of the other participants, you will receive two or more UTXOs.\nOne of those will be the change left over from the round, and it will retain the red-shield "),n("code",[e._v("anonymity set 1")]),e._v(" designation.\nThe remaining UTXO(s) will have either a yellow, a green, or a check-marked shield.\nYou can see the "),n("code",[e._v("anonymity set")]),e._v(" size for any UTXO by hovering your mouse-pointer over its associated shield.\nThe number represented by 'x' shown in the green-shield will reflect the anonymity set size for that round.")]),e._v(" "),n("p",[e._v("In this example, let's assume that the current minimum amount that can be registered for a CoinJoin round is 0.1 bitcoin.\nYou happen to have a UTXO worth 0.105 bitcoin, and you select it to be coinjoined.")]),e._v(" "),n("p",[e._v("After this CoinJoin round has concluded, you will receive 2 separate UTXOs.\nThe larger UTXO will have a colored shield (yellow, green, or check-marked based on your "),n("router-link",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#how-can-i-change-the-anonset-target"}},[e._v("Privacy Level Settings")]),e._v(") that indicates the size of the anonymity set achieved in that CoinJoin round.\nThe other, much smaller UTXO will be the amount (change) that was left over, and it will have a red-shield indicating an anonymity set of "),n("code",[e._v("1")]),e._v(" as it does not have the equal value denomination of the CoinJoin.")],1),e._v(" "),n("p",[e._v("Remember, to have green-shield UTXOs, all denomination outputs of a CoinJoin round must be equal.\nOtherwise, it would be easy to trace any of the output UTXOs back to its original input UTXO.\nSo, in the vast majority of CoinJoin rounds, there will be at least a small amount of leftover/change after the round has completed.")]),e._v(" "),n("p",[e._v("The small UTXO that is leftover/change from a CoinJoin round is clearly tied to your KYC input UTXO, but the green-shield UTXO is not.\nIf afterwards, you combine the red-shield UTXO with a green-shield UTXO in a single transaction, then it is clear that both came from the same owner.\nSince your identity was already known in the red-shield/anonset 1 UTXO, it can now be linked to your coinjoined UTXO.")]),e._v(" "),n("p",[e._v("Whenever you combine and send more than one UTXO in a single transaction, the lowest anonymity set among the inputs becomes the overriding anonymity set for all of the UTXOs used in that transaction.")]),e._v(" "),n("h3",{attrs:{id:"second-round-coinjoin-change"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#second-round-coinjoin-change"}},[e._v("#")]),e._v(" Second round CoinJoin change")]),e._v(" "),n("p",[e._v("When you take a 100 anonset UTXO, and you CoinJoin it again in a new 100 participant round, then you receive one UTXO with new, combined anonset of 200, and one leftover/change UTXO with same anonset as the input UTXO: 100.\nThe change UTXO still has an anonset 100 because it is the leftover, non-coinjoined change output of a second CoinJoin that used the 100 anonset UTXO as beginning input.\nThis change can still reveal premix history which is another CoinJoin, but ownership analysis cannot go further back than the first CoinJoin.")]),e._v(" "),n("p",[e._v("It is ok to use and spend this change output.\nDepending on who you are sending to, and what level of privacy you desire in that transaction, you could choose to send your coins with an anonset of 100, or for even more privacy, you can choose to send the coins with an anonset of 200.\nJust remember that if you consolidate the two in the same transaction, your effective anonymity set will be the lower anonymity set number of the selected coins, in this case 100.")]),e._v(" "),n("h2",{attrs:{id:"why-change-is-an-issue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#why-change-is-an-issue"}},[e._v("#")]),e._v(" Why change is an issue")]),e._v(" "),n("p",[e._v("Change is not inherently bad, it's a fundamental part of how Bitcoin and the UTXO model works.\nHowever, when sending a coin that is change from an earlier transaction, then the receiver can easily deduce that the sender was also part of the previous transaction that generated the change.")]),e._v(" "),n("p",[e._v("Whenever you are merging coins in one transaction, it becomes clear to any outside observer that these coins belong to the same entity, thus linking the previous transaction history.")]),e._v(" "),n("p",[e._v("You want to avoid merging "),n("code",[e._v("anonymity set 1")]),e._v(" coins with "),n("code",[e._v("anonymity set > 1")]),e._v(" mixed coins whenever possible, because this will link these coins and negate the privacy of the mixed coins gained through the CoinJoin.")]),e._v(" "),n("h2",{attrs:{id:"your-options-to-use-change-privately"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#your-options-to-use-change-privately"}},[e._v("#")]),e._v(" Your options to use change privately")]),e._v(" "),n("h3",{attrs:{id:"avoid-change-in-the-first-place"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#avoid-change-in-the-first-place"}},[e._v("#")]),e._v(" Avoid change in the first place.")]),e._v(" "),n("p",[e._v("Whenever possible, choose UTXO's for transactions where the destination addresses receive the entire value of your UTXO's, and you don't get any change back.\nThis can easily be done by clicking the "),n("code",[e._v("Max")]),e._v(" button in the "),n("code",[e._v("Send")]),e._v(" tab, which will automatically deduct the mining fee and send the highest amount possible to the destination.\nThis might not be possible in some cases where you have to pay a specific value of a payment request.")]),e._v(" "),n("p",[e._v("However, in other cases it is possible, for example donations or when depositing to an exchange.\nConsider supporting invaluable projects like "),n("a",{attrs:{href:"https://donate.torproject.org/cryptocurrency",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Tor Project"),n("OutboundLink")],1),e._v(" or "),n("a",{attrs:{href:"https://supporters.eff.org/donate/donate",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Electronic Frontier Foundation"),n("OutboundLink")],1),e._v(".\nYou can find a list of organizations that accept Bitcoin donations "),n("a",{attrs:{href:"https://en.bitcoin.it/wiki/Donation-accepting_organizations_and_projects",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"spend-the-change-with-another-entity-where-you-don-t-mind-if-each-of-the-two-know-that-you-transact-with-the-other-entity"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spend-the-change-with-another-entity-where-you-don-t-mind-if-each-of-the-two-know-that-you-transact-with-the-other-entity"}},[e._v("#")]),e._v(" Spend the change with another entity, where you don't mind if each of the two know that you transact with the other entity.")]),e._v(" "),n("p",[e._v("For example, if you buy something from Alice that costs 0.03 bitcoin, and you choose a UTXO in your wallet containing 0.1 bitcoin to use for payment.\nAlice receives her 0.03 bitcoin, and the remaining change 0.07 bitcoin is assigned to another address in your wallet.\nSince Alice knows the details of the transaction, she knows that the 0.07 bitcoin at that address belongs to you.")]),e._v(" "),n("p",[e._v("When you later spend these 0.07 bitcoin to an address, Alice knows that you are involved in this transaction, and she could potentially use that information against you.")]),e._v(" "),n("h3",{attrs:{id:"mix-with-joinmarket"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mix-with-joinmarket"}},[e._v("#")]),e._v(" Mix with JoinMarket.")]),e._v(" "),n("p",[e._v("In "),n("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket-clientserver",target:"_blank",rel:"noopener noreferrer"}},[e._v("JoinMarket"),n("OutboundLink")],1),e._v(" as a "),n("code",[e._v("market taker")]),e._v(" you can specify exactly what denomination of equal value outputs are generated in the CoinJoin.\nSo you can send the Wasabi change to your JoinMarket wallet and take an offer to mix for some number of rounds.")]),e._v(" "),n("p",[e._v("The coins you will receive after the JoinMarket tumbling algorithm will have a sufficient anonymity set, and you can use them for spending again.")]),e._v(" "),n("h3",{attrs:{id:"open-a-lightning-network-channel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#open-a-lightning-network-channel"}},[e._v("#")]),e._v(" Open a Lightning Network channel.")]),e._v(" "),n("p",[e._v("The Lightning Network can be a very private way of sending bitcoin, and you can choose the channel size to be exactly the size of your change coin.\nHowever, it is very important that you do not link this non-private coin to your main Lightning node public key.")]),e._v(" "),n("p",[e._v("So, a good strategy is to create a new Lightning node and public key, send the whole change coin into this fresh wallet, and open a channel of this amount to a random peer on the network.\nThen route a payment either to a merchant for goods and services, or to your own main Lightning node for further use.")]),e._v(" "),n("p",[e._v("After the balance of the channel is entirely on the other side, cooperatively close the channel with your peer, so that he gets the only output in the closing transaction.")]),e._v(" "),n("p",[e._v("Since Wasabi does not yet support Lightning Network functionality, you must use a different wallet for this task.")]),e._v(" "),n("h3",{attrs:{id:"atomic-swap-into-lightning-network"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#atomic-swap-into-lightning-network"}},[e._v("#")]),e._v(" Atomic swap into Lightning Network")]),e._v(" "),n("p",[e._v("There are some services that provide an atomic swap where you send the whole change coin to a multisignature hashed time locked contract on-chain.\nIn exchange, you receive a payment routed through the Lightning Network into one of your payment channels.")]),e._v(" "),n("p",[e._v("The swap is atomic, meaning either you receive the lightning payment, or you get the bitcoin back on-chain, so the service provider cannot steal from you.\nIf you use a regular Lightning invoice to receive the funds, then the service provider knows your node's public key and the channel he sends the bitcoin to.")]),e._v(" "),n("p",[e._v("For much better privacy, use rendezvous routing so that the sender does not gain knowledge of your receiving node.\nAlso ensure that the communication with the swap server is done over the tor network.")]),e._v(" "),n("h3",{attrs:{id:"consolidate-several-change-coins-but-in-a-coinjoin-directly"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consolidate-several-change-coins-but-in-a-coinjoin-directly"}},[e._v("#")]),e._v(" Consolidate several change coins, but in a CoinJoin directly.")]),e._v(" "),n("p",[e._v("If you consolidate many change coins in a regular non-CoinJoin transaction in the "),n("code",[e._v("Send")]),e._v(" tab, then any outside observer can easily see that one user controls all these coins.\nBut when consolidating in a CoinJoin directly, because there are hundreds of randomly ordered inputs in a Wasabi CoinJoin transaction, it is no longer easy to find out which coins belong to one single user.")]),e._v(" "),n("p",[e._v("However, a well resourced attacker can perform "),n("router-link",{attrs:{to:"/FAQ/FAQ-GeneralBitcoinPrivacy.html#what-is-a-coinjoin-sudoku"}},[e._v("CoinJoin sudoku")]),e._v(" to find out which of the many inputs fund the change output.\nFurther, during the "),n("router-link",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#what-is-happening-in-the-input-registration-phase"}},[e._v("input registration phase")]),e._v(", your wallet provides an input proof for all the registered coins to the coordinator.\nThus the coordinator knows that you control all these coins, and although zkSNACKs claims to not keep any logs, it is a reasonable assumption that everyone knows what the coordinator knows.")],1),e._v(" "),n("p",[e._v("In this CoinJoin you get an equal value mixed coin, which is no longer tied to any of your previous change coins (inputs), and a change output that can be tied to these inputs.\nSo consolidating your change in a CoinJoin is significantly more private and efficient than consolidating in a regular sending transaction, but it still leaks sensitive information.")]),e._v(" "),n("h3",{attrs:{id:"spend-the-change-to-the-same-entity-as-in-the-initial-transaction-but-always-use-a-new-address"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spend-the-change-to-the-same-entity-as-in-the-initial-transaction-but-always-use-a-new-address"}},[e._v("#")]),e._v(" Spend the change to the same entity as in the initial transaction, but always use a new address.")]),e._v(" "),n("p",[e._v("So, if in the first transaction you have 0.10 bitcoin and send Alice 0.04 bitcoin, you get 0.06 bitcoin back as change in a new address, which Alice can see belongs to you.\nNow, in a second transaction where you want to send Alice 0.05 bitcoin, you can select that 0.06 bitcoin change coin without losing any privacy, because Alice already knows this is your coin.")]),e._v(" "),n("p",[e._v("In this second transaction you will get back 0.01 bitcoin as change, which again, will still be known to Alice.\nIf, in a third transaction you want to send Alice 0.02 bitcoin, then you can consolidate the 0.01 bitcoin change with a new 0.10 bitcoin mixed coin, thus getting 0.09 bitcoin change.")]),e._v(" "),n("p",[e._v("Now Alice will know that you owned the 0.10 bitcoin and that you currently own the 0.09 bitcoin change, but she cannot find out about your premix transaction history.")])])}),[],!1,null,null,null);t.default=i.exports}}]);