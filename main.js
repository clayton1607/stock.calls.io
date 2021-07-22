function displayMessage() {
    // var fullName = document.flowerOrderForm.fullName.value;

    // // if/else statements for more information           
    // if (flowerName == document.flowerOrderForm.flowerTypes.roses) {
    //     var moreInfo = "https://en.wikipedia.org/wiki/Rose";
    // } 
    // else if (flowerName == document.flowerOrderForm.flowerTypes.carnations) {
    //         var moreInfo = "https://en.wikipedia.org/wiki/Dianthus_caryophyllus";
    //     } 

    // else if (flowerName == document.flowerOrderForm.flowerTypes.daisies) {
    //         var moreInfo = "https://en.wikipedia.org/wiki/Asteraceae";
    //     }           


    // document.flowerOrderForm.info.value = 
    // fullName + ", " + "thank you for your inquiry about " + flowerName + "." + NL
    // + "Here is a link for more information: " + moreInfo;

    var typeValue = document.forms['formStock']['stock'].value;
    var stockName = document.getElementById('stock-name').value;
    console.log(typeValue);
    if(typeValue == 'stockCall'){
        var startRange = document.getElementById('stock-call-start-range').value;
        var endRange = document.getElementById('stock-call-end-range').value
        var stockHint = '';
        for (var i = 0; i < stockName.length; i++) {
            if(i%2 == 0 && i!==0)
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
        
        +"\n\nStock Name gave +"+Math.ceil(percent)+" % Returns in "+Math.floor(daydiff)+" days."
         
        +"\nProton Tip on "+ date  +" @ Rs. "+priceExit
        +"\nNOW trading @ Rs. +"+priceToday
        +"\n\n*Proton Equity*\n*Positive learning Positive earning*";

    }else{
        var exitPercent = document.getElementById('stock-exit-percent').value;
        var percentRem = document.getElementById('stock-exit-percent-remaining').value;
        document.forms['formStock']['displayArea'].value = "Hi Proton Members,"
        +"\n\nIf you are holding " +stockName+", Please exit "+ exitPercent +" % of the allocated"
        +"\nNow Remaining = "+percentRem+"%"
        +"\n\n*Proton Equity*\n*Positive learning Positive earning*";
    }
}

function changeDisplay(type) {
    console.log(type);
    clearVisibility();
    document.getElementById(type).style.visibility = 'visible';
}

function clearVisibility(){
    document.getElementById('stockCall').style.visibility = 'hidden';
    document.getElementById('stockOnFire').style.visibility = 'hidden';
    document.getElementById('stockExit').style.visibility = 'hidden';
}

function copyToClipboard() {
    var copyText = document.getElementById('textArea');
    copyText.select();
    //copyText.setSelectionRange(0, 99999)
    document.execCommand('copy');
    copyText.remove();

  }