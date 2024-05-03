	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : '',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#a40e1a";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#FFFFFF";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#27181A";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Hide";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Hide";bookConfig.ShareButtonVisible="Hide";shareObj = [];bookConfig.isInsertFrameLinkEnable=" Hide";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Hide";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Hide";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Hide";bookConfig.isHideTabelOfContentNodes="no";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Hide";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Hide";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Hide";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="700";bookConfig.mouseWheelFlip="Yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Hide";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="fill";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="Yes";bookConfig.hardCoverBorderWidth="0";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="No";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="None";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="no";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="no";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#937354";bookConfig.totalPageCount=12;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2544;;bookConfig.securityType="1";bookConfig.CreatedTime ="240427160429";bookConfig.bookTitle="";bookConfig.bookmarkCR="ff9a5fa0670737d22f5587e66689c21355242948";bookConfig.productName="Flip PDF";bookConfig.homePage="";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "Russian",btnFirstPage:"Первая",btnNextPage:"Следующая страница",btnLastPage:"Последняя",btnPrePage:"Предыдущая страница",btnDownload:"Скачать",btnPrint:"Печать",btnSearch:"Поиск",btnClearSearch:"Очистить",frmSearchPrompt:"Clear",btnBookMark:"Содержание",btnHelp:"Помощь",btnHome:"Домой",btnFullScreen:"Развернуть",btnDisableFullScreen:"Свернуть",btnSoundOn:"Включить звук",btnSoundOff:"Отключить звук",btnShareEmail:"Поделиться",btnSocialShare:"Поделиться в социальных сетях",btnZoomIn:"Увеличить",btnZoomOut:"Уменьшить",btnDragToMove:"Переместить",btnAutoFlip:"Автоповорот",btnStopAutoFlip:"Отключить автоповорот",btnGoToHome:"Домой",frmHelpCaption:"Помощь",frmHelpTip1:"Увеличение/уменьшение по двойному щелчку",frmHelpTip2:"Для просмотра перетащите угол страницы",frmPrintCaption:"Печать окна",frmPrintBtnCaption:"Печать",frmPrintPrintAll:"Распечатать все страницы",frmPrintPrintCurrentPage:"Распечатать текущую страницу",frmPrintPrintRange:"Диапазон печати",frmPrintExampleCaption:"Пример: 2,5,8-26",frmPrintPreparePage:"Подготовка страницы:",frmPrintPrintFailed:"Распечатать не удалось:",pnlSearchInputInvalid:"(Минимальная длина запроса 3 символа)",loginCaption:"Войти",loginInvalidPassword:"Неверный пароль!",loginPasswordLabel:"Пароль:",loginBtnLogin:"Войти",loginBtnCancel:"Отменить ",btnThumb:"Миниатюры",lblPages:"Страницы:",lblPagesFound:"Страницы:",lblPageIndex:"Страница",btnAbout:"Информация",frnAboutCaption:"Информация и контакт",btnSinglePage:"Одна страница",btnDoublePage:"Две страницы",btnSwicthLanguage:"Переключить язык",tipChangeLanguage:"Пожалуйста, выберите язык ниже ...",btnMoreOptionsLeft:"Дополнительные параметры",btnMoreOptionsRight:"Дополнительные параметры",btnFit:"По размеру окна",smallModeCaption:"Нажмите, чтобы посмотреть в полноэкранном режиме",btnAddAnnotation:"Добавить аннотации",btnAnnotation:"Аннотации",FlipPageEditor_SaveAndExit:"Сохранить и выйти",FlipPageEditor_Exit:"Выход",DrawToolWindow_Redo:"Вернуть",DrawToolWindow_Undo:"Отменить",DrawToolWindow_Clear:"Очистить",DrawToolWindow_Brush:"Кисть",DrawToolWindow_Width:"Ширина",DrawToolWindow_Alpha:"Прозрачность",DrawToolWindow_Color:"Цвет",DrawToolWindow_Eraser:"Ластик",DrawToolWindow_Rectangular:"Прямоугольник",DrawToolWindow_Ellipse:"Овал",TStuff_BorderWidth:"Ширина границы",TStuff_BorderAlph:"Прозрачность границы",TStuff_BorderColor:"Цвет текста",DrawToolWindow_TextNote:"Заметка в тексте",AnnotMark:"Закладка",lastpagebtnHelp:"Последняя страница",firstpagebtnHelp:"Первая страница",homebtnHelp:"Вернуться на главную страницу",aboubtnHelp:"Информация",screenbtnHelp:"Откройте это приложение в полноэкранном режиме",helpbtnHelp:"Показать помощь",searchbtnHelp:"Поиск со страниц",pagesbtnHelp:"Посмотреть миниатюру этой брошюры",bookmarkbtnHelp:"Открыть закладку",AnnotmarkbtnHelp:"Открыть содержание",printbtnHelp:"Распечатать брошюру",soundbtnHelp:"Включение или выключение звука",sharebtnHelp:"Отправить на e-mail",socialSharebtnHelp:"Поделиться в социальных сетях",zoominbtnHelp:"Увеличить",downloadbtnHelp:"Скачать эту брошюру",pagemodlebtnHelp:"Переключить между одностраничным и двухстраничным режимом",languagebtnHelp:"Переключить язык",annotationbtnHelp:"Добавить аннотацию",addbookmarkbtnHelp:"Добавить закладку",removebookmarkbtnHelp:"Удалить закладку",updatebookmarkbtnHelp:"Обновить закладку",btnShoppingCart:"Корзина",Help_ShoppingCartbtn:"Корзина",Help_btnNextPage:"Следующая страница",Help_btnPrePage:"Предыдущая страница",Help_btnAutoFlip:"Автоповорот",Help_StopAutoFlip:"Отключить автоповорот",btnaddbookmark:"Добавить",btndeletebookmark:"Удалить",btnupdatebookmark:"Обновить",frmyourbookmarks:"Ваши закладки",frmitems:"позиции",DownloadFullPublication:"Полная публикация",DownloadCurrentPage:"Текущая страница",DownloadAttachedFiles:"Вложенные файлы",lblLink:"Ссылка",btnCopy:"Кнопка копирования",infCopyToClipboard:"Your browser does not support clipboard. ",restorePage:"Хотите ли вы восстановить предыдущую сессию?",tmpl_Backgoundsoundon:"Включить фоновый звук",tmpl_Backgoundsoundoff:"Отключить фоновый звук",tmpl_Flipsoundon:"Включить звук при поворорте",tmpl_Flipsoundoff:"Отключить звук при повороте",Help_PageIndex:"Номер текущей страницы",tmpl_PrintPageRanges:"ДИАПАЗОН СТРАНИЦ",tmpl_PrintPreview:"ПРЕДПРОСМОТР",btnSelection:"Выбор текста",loginNameLabel:"Имя:",btnGotoPage:"Идти",btnSettings:"Настройка",soundSettingTitle:"Настройка звука",closeFlipSound:"Отключить звук при повороте",closeBackgroundSound:"Отключить фоновый звук",frmShareCaption:"Поделиться",frmShareLinkLabel:"Ссылка:",frmShareBtnCopy:"Копировать",frmShareItemsGroupCaption:"Поделиться в социальных сетях",TAnnoActionPropertyStuff_GotoPage:"Идти на страницу",btnPageBack:"Назад",btnPageForward:"Вперед",SelectTextCopy:"Копировать текст",selectCopyButton:"Копировать",TStuffCart_TypeCart:"Корзина",TStuffCart_DetailedQuantity:"Количество",TStuffCart_DetailedPrice:"Цена",ShappingCart_Close:"Закрыть",ShappingCart_CheckOut:"Оформить заказ",ShappingCart_Item:"Позиция",ShappingCart_Total:"Сумма",ShappingCart_AddCart:"Добавить в корзину",ShappingCart_InStock:"В наличии",TStuffCart_DetailedCost:"Стоимость доставки",TStuffCart_DetailedTime:"Время доставки",TStuffCart_DetailedDay:"дней",ShappingCart_NotStock:"Не достаточно товара в наличии",btnCrop:"Обрезать",btnDragButton:"Перетащить",btnFlipBook:"Повернуть книгу",btnSlideMode:"Режим слайдов",btnSinglePageMode:"Одностраничный режим",btnVertical:"Вертикальный режим",btnHotizontal:"Горизонтальный режим",btnClose:"Закрыть",btnDoublePage:"Две страницы",btnBookStatus:"Чтение",checkBoxInsert:"Вставить текущую страницу",lblLast:"Это последняя страница",lblFirst:"Это первая страница",lblFullscreen:"Нажмите для входа в полноэкранный режим",lblName:"Имя",lblPassword:"Пароль",lblLogin:"Войти",lblCancel:"Отмена",lblNoName:"Поле \"Имя пользователя\" не может быть пустым",lblNoPassword:"Поле \"Пароль\" не может быть пустым",lblNoCorrectLogin:"Пожалуйста, введите правильное имя пользователя и пароль",btnVideo:"Видео галерея",btnSlideShow:"Слайд-шоу",pnlSearchInputInvalid:"(Минимальная длина запроса 3 символа)",btnDragToMove:"Переместить",btnPositionToMove:"Следовать за мышкой",lblHelp1:"Для просмотра перетащите угол страницы",lblHelp2:"Увеличение/уменьшение по двойному щелчку",lblCopy:"Копировать",lblAddToPage:"добавить на страницу",lblPage:"Страница",lblTitle:"Название",lblEdit:"Редактировать",lblDelete:"Удалить",lblRemoveAll:"Удалить все",tltCursor:"курсор",tltAddHighlight:"добавить выделение",tltAddTexts:"добавить текст",tltAddShapes:"добавить форму",tltAddNotes:"добавить заметку",tltAddImageFile:"добавить картинку",tltAddSignature:"добавить подпись",tltAddLine:"добавить линию",tltAddArrow:"добавить стрелку",tltAddRect:"добавить прямоугольник",tltAddEllipse:"добавить овал",lblDoubleClickToZoomIn:"Увеличить по двойному щелчку",frmShareCaption:"Поделиться",frmShareLabel:"Поделиться",frmShareInfo:"Вы можете легко поделиться этой публикацией в социальных сетях. Просто нажмите соответствующую кнопку.",frminsertLabel:"Вставить на сайт",frminsertInfo:"Используйте этот код для вставки публикации на ваш веб-сайт.",btnQRCode:"Нажмите для сканирования QR кода",btnRotateLeft:"Повернуть влево",btnRotateRight:"Повернуть вправо",lblSelectMode:"Select view mode please.",frmDownloadPreview:"Preview",frmHowToUse:"How To Use",lblHelpPage1:"Move your finger to flip the book page.",lblHelpPage2:"Zoom in by using gesture or double click on the page.",lblHelpPage3:"Click on the logo to reach the official website of the company.",lblHelpPage4:"Add bookmarks, use search function and auto flip the book.",lblHelpPage5:"Switch horizontal and vertical view on mobile devices.",TTActionQuiz_PlayAgain:"Do you wanna play it again",TTActionQuiz_Ration:"Your ratio is",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Select Text",btnNote:"Annotation",btnPhoneNumber:"Telephone",btnWeCharShare:"WeChat Share",frmBookMark:"закладка",btnFullscreen:"Во весь экран",btnExitFullscreen:"Выхад з поўнаэкраннага рэжыму",btnMore:"более",frmPrintall:"Распечатать все страницы",frmPrintcurrent:"Распечатать текущую страницу",frmPrintRange:"Диапазон печати",frmPrintexample:"Пример: 2,3,5-10",frmPrintbtn:"печать",frmaboutcaption:"контакт",frmaboutcontactinformation:"Контактная информация",frmaboutADDRESS:"АДРЕС",frmaboutEMAIL:"E-MAIL",frmaboutWEBSITE:"САЙТ",frmaboutMOBILE:"МОБИЛЬНЫЕ",frmaboutAUTHOR:"АВТОР",frmaboutDESCRIPTION:"ОПИСАНИЕ",frmSearch:"поиск",frmToc:"Содержание",btnTableOfContent:"Показать оглавление",lblDescription:"заглавие",frmLinkLabel:"Ссылка",infNotSupportHtml5:"Ваш браузер не поддерживает HTML5.",frmQrcodeCaption:"Сканирование дна двумерного кода для просмотра с мобильного телефона."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.043764","y":"0.780672","width":"0.748148","height":"0.027930"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://foto.pamyat-naroda.ru/view/71160035"}}],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.034829","y":"0.053670","width":"0.769959","height":"0.021002"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://pamyat-naroda.ru/heroes/sm-person_doroga2618423"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.034623","y":"0.126447","width":"0.565928","height":"0.019688"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://foto.pamyat-naroda.ru/view/71160035"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.034829","y":"0.199515","width":"0.516878","height":"0.015750"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://1418museum.ru/heroes/31147257"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.034829","y":"0.053670","width":"0.769959","height":"0.021002"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://pamyat-naroda.ru/heroes/sm-person_doroga2618423"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.034623","y":"0.126447","width":"0.565928","height":"0.019688"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://foto.pamyat-naroda.ru/view/71160035"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.034829","y":"0.199515","width":"0.516878","height":"0.015750"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://1418museum.ru/heroes/31147257"}}]]}; bookConfig.isFlipPdf=false; var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{}];
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}