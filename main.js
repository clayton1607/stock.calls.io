function displayMessage() {
    var typeValue = document.forms['formStock']['stock'].value;
    var stockName = document.getElementById('stock-name').value;
    console.log(typeValue);
    if(typeValue == 'stockCall'){
        var startRange = document.getElementById('stock-call-start-range').value;
        var endRange = document.getElementById('stock-call-end-range').value
        var stockHint = '';
        for (var i = 0; i < stockName.length; i++) {
            if(i%3 == 0 && i!==0)
                stockHint = stockHint +stockName.charAt(i);
            else
                stockHint = stockHint +'-';
		}
        document.forms['formStock']['displayArea'].value = "Hi Proton Members,"+
        "\n\nWe are happy to provide  you with a great stock Idea with the potential for good returns."+
        " \nAdd *"+stockHint+"* to your portfolio in the range of *"+startRange+" -"+endRange+" * \n\n*Proton Equity*\n*Positive learning Positive earning*";
    }
    else if(typeValue == 'stockOnFire'){
        var date = document.getElementById('stock-exit-date').value;
        var priceExit = document.getElementById('stock-exit-price').value;
        var priceToday = document.getElementById('stock-exit-price-today').value;
        var dateToday = new Date();
        var percent = ((priceToday-priceExit)/priceExit)*100;
        var daydiff = (dateToday- (new Date(date))) / (1000 * 60 * 60 * 24); 
        document.forms['formStock']['displayArea'].value = "Hi Proton Members, "
        +"\nHope you benefited from our stock Idea!!"
        
        +"\n\n"+stockName+" gave "+Math.ceil(percent)+" % Returns in "+Math.floor(daydiff)+" days."
         
        +"\nProton Tip on "+ date  +" @ Rs. "+priceExit
        +"\nNow trading @ Rs. "+priceToday
        +"\n\n*Proton Equity*\n*Positive learning Positive earning*"
        +'\n🔥'+'🔥'+'🔥';

    }else if(typeValue == 'stockExit'){
        var exitPercent = document.getElementById('stock-exit-percent').value;
        var percentRem = document.getElementById('stock-exit-percent-remaining').value;
        document.forms['formStock']['displayArea'].value = "Hi Proton Members,"
        +"\n\nIf you are holding " +stockName+", Please exit "+ exitPercent +" % of the allocated"
        +"\nNow Remaining = "+percentRem+"%"
        +"\n\n*Proton Equity*\n*Positive learning Positive earning*";
    }else if(typeValue == 'stockHype'){
        document.forms['formStock']['displayArea'].value = "Hi Proton Members,"
        +"\n\nStay glued in! Tomorrow morning at 9:30 AM a new stock idea will be announced."
        +"\n\n*Proton Equity*\n*Positive learning Positive earning*";
    }else if(typeValue == 'premiumService'){
        document.forms['formStock']['displayArea'].value = "Sign up for our Premium Membership and build the foundation for your financial freedom."
        +"Proton Equity's premium membership is catered to both the novice Investor looking to build a sound investment portfolio"
        +" as well as the more experienced investor with a focus on returns. Protons Investing principles are grounded through risk"
        +" diversification and are driven through research. "
        +"\n\n*Proton Equity Premium*" 
        +"\n\n*Invest Lite - 8 Stock Ideas (0 or 1 Monthly)*" 
        +"\nBuy, Sell & Stop Loss Notices"
        +"\nHolding Period - 8 - 12 Months"
        +"\nFees - INR 10,000.00 "
        +"\nRecommended Investment: INR 15,000 - 20,000 Per Share"
        +"\n\n*Invest Pro - 20 Stock Ideas (1 or 2 Monthly)*"
        +"\nBuy, Sell & Stop Loss Notices"
        +"\nHolding Period - 8 - 12 Months"
        +"\nCompany Indicator Reports"
        +"\nFees - INR 20,000.00 "
        +"\nRecommended Investment - INR 20,000 - 25,000 Per Share"
        +"\n\n*Proton Equity*"
        +"\n*Positive learning Positive earning*"
        +"\n\n*Please Note:*"
        +"\n_Proton Equity doesn’t engage in speculative investments such as Options, Futures, Cash Derivatives, Crypto etc. "
        +"Proton Equity is not a SEBI registered Advisor all ideas provided are only insights._";
    }
}

function changeDisplay(type) {
    console.log(type);
    clearVisibility();
    if(type == 'stockHype' || type == 'premiumService'){
        document.getElementById('stockName').style.visibility = 'hidden';
    }else{
        document.getElementById('stockName').style.visibility = 'visible';
        document.getElementById(type).style.visibility = 'visible';
    }
}

function clearVisibility(){
    document.getElementById('stockCall').style.visibility = 'hidden';
    document.getElementById('stockOnFire').style.visibility = 'hidden';
    document.getElementById('stockExit').style.visibility = 'hidden';
}

function copyToClipboard() {
    var copyText = document.getElementById("textArea");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");

  }