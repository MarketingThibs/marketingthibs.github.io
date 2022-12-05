let submit = document.querySelector("#submit");

submit.addEventListener("click", function () {
  // general inputs
  let companyLogo = document.querySelector("#companyLogo").value;
  companyLogo = companyLogo ? companyLogo : 'https://picsum.photos/80';
  let companyName = document.querySelector("#companyName").value;
  companyName = companyName ? companyName : 'Awesome Company';
  let companyWebUrl = document.querySelector("#companyWebUrl").value;
  companyWebUrl = companyWebUrl ? companyWebUrl : 'https://duckduckgo.com/';
  let mcPageName = document.querySelector("#mcPageName").value;
  mcPageName = mcPageName ? mcPageName : 'unsubscribe';
  let headerBgUrl = document.querySelector("#headerBgUrl").value;
  let isMktOnly = document.getElementById("isMarketingOnly");
  // colors
  let pageNavBarColor = document.querySelector("#pageNavBarColor").value;
  let pageHeaderTextColor = document.querySelector(
    "#pageHeaderTextColor"
  ).value;
  let pageBodyColor = document.querySelector("#pageBodyColor").value;
  let pageBodyTitleColor = document.querySelector("#pageBodyTitleColor").value;
  let pageBodyTextColor = document.querySelector("#pageBodyTextColor").value;
  let pageBtnColor = document.querySelector("#pageBtnColor").value;
  let pageBtnTextColor = document.querySelector("#pageBtnTextColor").value;
  let pageBtnHoverColor = document.querySelector("#pageBtnHoverColor").value;
  let pageBtnTextHoverColor = document.querySelector(
    "#pageBtnTextHoverColor"
  ).value;
  let pageFooterColor = document.querySelector("#pageFooterColor").value;
  let pageFooterTextColor = document.querySelector(
    "#pageFooterTextColor"
  ).value;
  // social
  let socialFb = document.querySelector("#socialFb").value;
  let socialTw = document.querySelector("#socialTw").value;
  let socialIn = document.querySelector("#socialIn").value;
  let socialIm = document.querySelector("#socialIm").value;
  let socialYt = document.querySelector("#socialYt").value;
  console.table(socialFb, socialIm, socialIn, socialTw, socialYt);
  let hrefFacebook;
  let hrefTwitter;
  let hrefInstagram;
  let hrefLinkedin;
  let hrefYouTube;
  if (socialFb) {
    hrefFacebook = `&lt;a href=&quot;${socialFb}/&quot; class=&quot;uk-icon-button&quot; uk-icon=&quot;facebook&quot;&gt;&lt;/a&gt;`;
  } else {
    hrefFacebook = "";
  }
  if (socialTw) {
    hrefTwitter = `&lt;a href=&quot;${socialTw}/&quot; class=&quot;uk-icon-button&quot; uk-icon=&quot;twitter&quot;&gt;&lt;/a&gt;`;
  } else {
    hrefTwitter = "";
  }
  if (socialIn) {
    hrefInstagram = `&lt;a href=&quot;${socialIn}/&quot; class=&quot;uk-icon-button&quot; uk-icon=&quot;instagram&quot;&gt;&lt;/a&gt;`;
  } else {
    hrefInstagram = "";
  }
  if (socialIm) {
    hrefLinkedin = `&lt;a href=&quot;${socialIm}/&quot; class=&quot;uk-icon-button&quot; uk-icon=&quot;linkedin&quot;&gt;&lt;/a&gt;`;
  } else {
    hrefLinkedin = "";
  }
  if (socialYt) {
    hrefYouTube = `&lt;a href=&quot;${socialYt}/&quot; class=&quot;uk-icon-button&quot; uk-icon=&quot;youtube&quot;&gt;&lt;/a&gt;`;
  } else {
    hrefYouTube = "";
  }

  if (isMktOnly.checked == true) {
    console.log("Oh yeah this is SFMC 🥷");
  } else {
    console.log("Something else, we take no risks🐣");
  }
  // Output for display
  let title2 = document.querySelector("#title2");
  let fillTextArea = document.querySelector("#myHtmlCode");
  let rawHTML = `%%[  
    /* Retrieves contact info from parameters */
    set @subkey = RequestParameter('sbk')
    /* We check if the page was submitted from email or self */
    set @submitedForm = RequestParameter('submitedForm') 
    /* we check if the subkey is an email instead of an id */
    set @isEmailSbk = IndexOf(@subkey,'@')
    /* browser language */
    set @browserLang = HTTPRequestHeader("Accept-Language")
    set @lang = Substring(@browserLang,0,5)
    /* add an if condition e.g. fr-FR */
     
    /* Condition to know if we need to resubscribe or only unsub */  
    if @submitedForm == "unsub" or Empty(@submitedForm) then
         /* unsubscribe */
        set @subStatus = "Unsubscribed"
        set @subStatusSf = "True"    
        set @formAction = "resub"
    else
         /* resubscribe */
        set @subStatus = "Active"
        set @subStatusSf = "False"
        set @formAction = "unsub"
    endif

    /* checks if the subkey is an email - not a SF contact */
    if @isEmailSbk > 0 then 
        set @email = Lookup('_Subscribers', 'EmailAddress', 'SubscriberKey', @subkey)
    else 
        /* Updates salesforce when SF subscriber */
        /* Uncomment if you're using SF contacts or leads
        set @rowsContacts = lookuprows('Contact_Salesforce','Id',@subkey)
        set @nbRowsContacts = rowcount(@rowsContacts)
        set @rowsLeads = lookuprows('Lead_Salesforce','Id',@subkey)
        set @nbRowsLeads = rowcount(@rowsLeads)
        */
        if @nbRowsContacts > 0 then
            /* Updates contacts
            set @upHasOptedOutOfEmail = UpdateSingleSalesforceObject('Contact',@subkey,'HasOptedOutOfEmail',@subStatusSf) 
             set @email = Lookup('Contact_Salesforce', 'Email', 'Id', @subkey) 
            */
        elseif @nbRowsLeads > 0 then
            /* Uncomment if you're using SF leads
            set @upHasOptedOutOfEmail = UpdateSingleSalesforceObject('Lead',@subkey,'HasOptedOutOfEmail',@subStatusSf)
            set @email = Lookup('Lead_Salesforce', 'Email', 'Id', @subkey) 
            */
        else   
            
        endif
        
    endif 
    
    /* Updates MC all subscribers status uncomment when ready
    set @Subscriber = CreateObject("Subscriber")
    SetObjectProperty(@Subscriber, "SubscriberKey",@subkey)
    SetObjectProperty(@Subscriber, "EmailAddress",@email)
    SetObjectProperty(@Subscriber, "Status", @subStatus)
    set @Status = InvokeUpdate( @Subscriber, @createErrDesc, @createErrNo, @createOpts)
    */
    /* Workding and landing page content */ 
    set @headerTitle = "Company"
    if @submitedForm == "unsub" or Empty(@submitedForm) then
        set @headerSubtitle = "Nous sommes désolés de vous voir partir."
        set @bodyTitle = "Gérer vos préférences en matière de messagerie électronique"
        /* Si désabonné */
        set @bodyText = TreatAsContent("Merci, nous confirmons votre désinscription à nos communications par courrier électronique.<br><br><i>Si vous souhaitez vous réinscrire, veuillez cliquer sur réinscription.</i>.")   
        set @labelBtn1 = "Se Réabonner"
    else
        /* Reste */
        set @headerSubtitle = "Centre de désabonnement"
        set @bodyTitle = "Gérer vos préférences en matière de messagerie électronique"
        set @bodyText = "Merci, nous avons bien enregistré vos préférences de communications par courrier électronique."
        set @labelBtn1 = "Se Désabonner"
    endif    
    set @labelBtn2 = "Visiter notre site"
    set @textDPO = TreatAsContent("Vous recevez cette communication car vous faites partie de notre base de données. En savoir plus sur notre <a href='${companyWebUrl}content/16-politique-de-confidentialite' target='_Blank' style='text-decoration:underline;'>politique de confidentialité</a>.")
 
]%%&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;

    &lt;!-- Tab icon --&gt;
    &lt;link rel=&quot;icon&quot; href=&quot;data:image/svg+xml,&lt;svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22&gt;&lt;text y=%22.9em%22 font-size=%2290%22&gt;&#x2709;&#xFE0F;&lt;/text&gt;&lt;/svg&gt;&quot;&gt;


    &lt;title&gt;${companyName}| D&eacute;sabonnement &lt;/title&gt;
    &lt;!-- UIkit CSS --&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/npm/uikit@3.11.1/dist/css/uikit.min.css&quot; /&gt;

    &lt;!-- UIkit JS --&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/uikit@3.11.1/dist/js/uikit.min.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/uikit@3.11.1/dist/js/uikit-icons.min.js&quot;&gt;&lt;/script&gt;

    &lt;!-- Google font --&gt;
    &lt;link rel=&quot;preconnect&quot; href=&quot;https://fonts.googleapis.com&quot;&gt;
    &lt;link rel=&quot;preconnect&quot; href=&quot;https://fonts.gstatic.com&quot; crossorigin&gt;
 

    &lt;style&gt;
        /* fonts */
        html, body {
            font-family: &apos;Open Sans&apos;, sans-serif;
        }
        p {
            font-family: &apos;Open Sans&apos;, sans-serif;
            font-weight: 300;
        }
        h1, h2 {
            font-family: &apos;Open Sans&apos;, sans-serif;
            font-weight: 900;
        }
        h3 {
            font-family: &apos;Open Sans&apos;, sans-serif;
            font-weight: 400;        
        }

        /* Nav */
        .uk-navbar-container:not(.uk-navbar-transparent) {
            background-color: ${pageNavBarColor};
        }
        .uk-logo img {
            height: 100px;
            padding: 20px;
        }
        /* Header */
        .header-text {
            /* text-shadow: 1px 1px #333333; */
            color: ${pageHeaderTextColor};
        }
        .header-bg {
            background-color: ${pageNavBarColor};
        } 
        /* body */
        .unsub-body {
            background-color: ${pageBodyColor};  
        }

        .uk-icon-button {
            background: ${pageBtnColor};
            color: ${pageBtnTextColor};
        }
        .uk-icon-button:hover {
            background: ${pageBtnHoverColor};
            color: ${pageBtnTextHoverColor} ;
        }

        .uk-button-primary {
            background-color: ${pageBtnColor};
            color: ${pageBtnTextColor};
            font-weight: 800;
        }
        .uk-button-primary:hover {
            background-color: ${pageBtnHoverColor};
            color: ${pageBtnTextHoverColor};
            font-weight: 800;
        }    
        .body-title {
            color: ${pageBodyTitleColor};
        }
        .body-text {
            color: ${pageBodyTextColor};
        }
 
        /* footer */
        .footer {
            background-color: ${pageFooterColor};
            color: ${pageFooterTextColor};
        }
        .footer a {
            text-decoration: underline;
            color:  ${pageFooterTextColor};
        }
        .mentions {
            padding: 0px 60px 20px 60px;
            font-size: 0.7em;
            font-style: italic;
        }  
        /* form styling */
        
        .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
        }
        
        .switch input { 
            opacity: 0;
            width: 0;
            height: 0;
        }
        
        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
        }
        
        .slider:before {
            position: absolute;
            content: &quot;&quot;;
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }
        
        input:checked + .slider {
            background-color: ${pageBtnColor};
        }
        
        input:focus + .slider {
            box-shadow: 0 0 1px ${pageBtnColor};
        }
        
        input:checked + .slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }
        .uk-input:focus, .uk-select:focus, .uk-textarea:focus {
            border-color: ${pageBtnColor};
            color: ${pageBtnTextColor};
        }
        /* Rounded sliders */
        .slider.round {
            border-radius: 34px;
        }
        
        .slider.round:before {
            border-radius: 50%;
        }
    &lt;/style&gt;

&lt;/head&gt;
&lt;body&gt;    

    &lt;header&gt;
        &lt;nav class=&quot;uk-navbar-container uk-box-shadow-medium&quot; uk-navbar&gt;
            &lt;div class=&quot;uk-navbar-center&quot;&gt;        
                &lt;div class=&quot;uk-navbar-center-left&quot;&gt;&lt;div&gt;                  
                &lt;/div&gt;
                &lt;/div&gt;
                &lt;a class=&quot;uk-navbar-item uk-logo&quot; href=&quot;#&quot;&gt;&lt;img src=&quot;${companyLogo}&quot; alt=&quot;${companyName}&quot;&gt;&lt;/a&gt;
                &lt;div class=&quot;uk-navbar-center-right&quot;&gt;&lt;div&gt;
                &lt;/div&gt;&lt;/div&gt;        
            &lt;/div&gt;
        &lt;/nav&gt;
        &lt;div class=&quot;uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover header-bg&quot; uk-img data-src=&quot;${headerBgUrl}&quot;&gt;
            &lt;div class=&quot;uk-text-center&quot;&gt;
                    &lt;h1 class=&quot;uk-animation-scale-up uk-transform-origin-top-center header-text&quot;&gt;%%=v(@headerTitle)=%%&lt;/h1&gt;                
                &lt;p class=&quot;header-text&quot;&gt;%%=v(@headerSubtitle)=%%&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/header&gt;
    &lt;section class=&quot;unsub-body&quot;&gt;
        &lt;div class=&quot;uk-container uk-height-max-large&quot;&gt;
            &lt;div class=&quot;uk-grid-collapse uk-child-width-3-6@s uk-flex-middle uk-flex-center&quot; uk-grid&gt;                     
                &lt;div class=&quot;uk-padding&quot; &gt;
                    &lt;h1 class=&quot;body-title uk-margin uk-text-center&quot;&gt;%%=v(@bodyTitle)=%%&lt;/h1&gt;
                    &lt;p class=&quot;body-text uk-text-center uk-margin-medium-bottom&quot;&gt;%%=v(@bodyText)=%%&lt;/p&gt;
                    &lt;form action=&quot;/${mcPageName}&quot; method=&quot;POST&quot; name=&quot;centrePreferences&quot; class=&quot;uk-grid-small uk-margin uk-flex-middle uk-flex-center&quot; uk-grid&gt;
                        &lt;input type=&quot;hidden&quot; name=&quot;sbk&quot; value=&quot;%%=v(@subkey)=%%&quot;&gt;              
                        &lt;input type=&quot;hidden&quot; name=&quot;submitedForm&quot; value=&quot;%%=v(@formAction)=%%&quot;&gt;              
                        &lt;div class=&quot;uk-width-1-3@s&quot;&gt;
                            &lt;input type=&quot;submit&quot; class=&quot;uk-button uk-button-primary uk-width-1-1&quot; value=&quot;%%=v(@labelBtn1)=%%&quot;&gt;
                        &lt;/div&gt;       
                        &lt;div class=&quot;uk-width-1-3@s&quot;&gt;
                            &lt;a class=&quot;uk-button uk-button-primary uk-width-1-1&quot; href=&quot;${companyWebUrl}&quot;&gt;%%=v(@labelBtn2)=%%&lt;/a&gt;
                        &lt;/div&gt;                                  
                    &lt;/form&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/section&gt;
    &lt;section class=&quot;uk-section footer&quot;&gt;
        &lt;div class=&quot;uk-text-center&quot;&gt;
            ${hrefFacebook}
            ${hrefTwitter}
            ${hrefInstagram}
            ${hrefLinkedin}
            ${hrefYouTube}
        &lt;/div&gt;
       &lt;p class=&quot;uk-text-center&quot;&gt;%%xtyear%% - ${companyName}&lt;/p&gt;
       &lt;p class=&quot;uk-text-center mentions&quot;&gt;%%=v(@textDPO)=%%&lt;/p&gt;
    &lt;/section&gt;

&lt;/body&gt;
&lt;/html&gt;`;
  fillTextArea.innerHTML = rawHTML;
});
// Using a custom editor to highlight the resulting code
let editCode = document.querySelector("#editCode");
editCode.addEventListener(
  "click",
  function () {
    const myCodeMirror = CodeMirror.fromTextArea(myHtmlCode, {
      theme: "material",
      lineNumbers: true,
      tags: {
        style: [
          ["type", /^text\/(x-)?scss$/, "text/x-scss"],
          [null, null, "css"],
        ],
        custom: [[null, null, "customMode"]],
      },
    });
  },
  { once: true }
);

let copyCode = document.querySelector("#copyCode");
copyCode.addEventListener("click", function copySource() {
  /* Get the text field */
  var copyText = document.getElementById("myHtmlCode");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
});

let reloadPage = document.querySelector("#reloadPage");
reloadPage.addEventListener("click", function () {
  location.reload();
});

// Going social part
const selectSocial = document.querySelector("#goingSocial");

selectSocial.addEventListener("change", (event) => {
  if (selectSocial.value == "yes") {
    console.log(`✅ is checked`);
    document.getElementById("ifSocial").style.display = "block";
  } else {
    console.log(`🐣 is not checked`);
    document.getElementById("ifSocial").style.display = "none";
  }
});
