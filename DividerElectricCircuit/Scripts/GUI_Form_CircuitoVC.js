var dd;

var isShadow;

var swDIV;

var unidadVoltaje;

var unidadResistencia;

var unidadCorriente;

var unidadPotencia;

var idioma;

var decimals;

var lenguajes;

function iniciar(tipoC){

lenguajes={

"languajes":
[                                  


{"lang":"eng", "words":{  

"Agregar_Resistencia":["Add Resistence"]  , 
"Calculo_Totales":["Total Calcs"] , 
"Ir_Div":["Go To Tension Divider","Go To Current Divider"],
"Ir_Div_Tension":["Go To Tension Divider"],
"Ir_Div_Corr":["Go To Current Divider"],
"Fuente":["Current","Voltage"],
"Corriente":["Current"],
"Voltaje":["Voltage"],
"Resistencia":["Resistence"],
"Potencia":["Power"],
"Numeros_Decimales":["Decimal Numbers"],
"Diagrama":["Line Diagram"],
"Sombra":["Shade"],
"Cambio_DV_DC":["To Change Dividers"],
"Opcion1Conmutacion":["Total Pöwer Constant"],
"Opcion2Conmutacion":["Source Value not change"],
"Unidades_De_Medida":["Units Meassure"],
"Voltios": ["miliVolts","Volts","kiloVolts"]  , 
"Ohms":["miliOhms","Ohms","kiloOhoms"],
"Amperes":["miliAmperes","Amperes","kiloAmperes"],
"Watts":["miliWatt","Watt","kiloWatts"],
"Idiomas":["English","Spanish","French","German","Portugues","Italian","Chinese"],
"Resistencia_No_Cero":["Value Resistence should be greather than cero"],
"Solo_Numeros":["Enter only numeric values"], 
"Division_por_Cero":["Division by Cero"],
"Potencia_Total":["Potencia Total"],
"R_EQ":["R Equivalente"],
"V_NORTON":["V Norton"],
"I_TH":["I Thevenin"],
"Mensaje":["Mensaje"],
"Configuracion":["Settings"],

"Ingles:":["English"],
"Espannol:":["Spanish"],
"Frances:":["French"],
"Aleman:":["German"],
"Portugues:":["Portuguesse"],
"Italiano:":["Italian"],
"Chino:":["Chinese"]


}  },

{"lang":"sp", "words":{  

"Agregar_Resistencia":["Agregar Resistencia"]  , 
"Calculo_Totales":["Calculo Totales"] , 
"Ir_Div":["Ir a Divisor de Tension","Ir a Divisor de Corriente"],
"Ir_Div_Tension":["Ir a Divisor de Tension"],
"Ir_Div_Corr":["Ir a Divisor de Corriente"],
"Fuente":["Corriente","Voltaje"],
"Corriente":["Corriente"],
"Voltaje":["Voltaje"],
"Resistencia":["Resistencia"],
"Potencia":["Potencia"],
"Numeros_Decimales":["Numeros Decimales"],
"Diagrama":["Diagrama de Linea"],
"Sombra":["Sombra"],
"Cambio_DV_DC":["Conmutacion de Divisores"],
"Opcion1Conmutacion":["Potencia Total Constante"],
"Opcion2Conmutacion":["No Cambiar Valores de las Fuentes"],
"Unidades_De_Medida":["Unidades de Medida"],
"Voltios": ["miliVoltios","voltios","kiloVoltios"]  , 
"Ohms":["miliOhms","Ohms","kiloOhoms"],
"Amperes":["miliAmperios","Amperios","kiloAmperios"],
"Watts":["miliVatios","Vatios","kiloVatios"],
"Idiomas":["Ingles","Español","Frances","Aleman","Portugues","Italiano","Chino"],
"Resistencia_No_Cero":["Resistencia debe ser mayor que cero"],
"Solo_Numeros":["Ingrese solo numeros"], 
"Division_por_Cero":["Division por Cero"],
"Potencia_Total":["potencia Total"],
"R_EQ":["R Equivalent"],
"V_NORTON":["V Norton"],
"I_TH":["I Thevenin"],
"Mensaje":["Mensaje"],
"Configuracion":["Opciones"],


"Ingles:":["Ingles"],
"Espannol:":["Español"],
"Frances:":["Frances"],
"Aleman:":["Aleman"],
"Portugues:":["Portugues"],
"Italiano:":["Italianiano"],
"Chino:":["Chino"]

}  },



{"lang":"fr", "words":{  

"Agregar_Resistencia":["Ajouter Résistance"]  , 
"Calculo_Totales":["Calculer les totaux"] , 
"Ir_Div":["Aller à la diviseur de tension","Aller à la diviseur de courant"],
"Ir_Div_Tension":["Aller à la diviseur de tension"],
"Ir_Div_Corr":["Aller à la diviseur de courant"],
"Fuente":["Courant","Tension"],
"Corriente":["Courant"],
"Voltaje":["Tension"],
"Resistencia":["Résistance"],
"Potencia":["Puissance"],
"Numeros_Decimales":["Nombres Décimaux"],
"Diagrama":["Schéma Ligne"],
"Sombra":["Ombre"],
"Cambio_DV_DC":["De commutation Diviseurs de I / V"],
"Opcion1Conmutacion":["Puissance totale Constant"],
"Opcion2Conmutacion":["Pas de changement de valeurs Fontaines"],
"Unidades_De_Medida":["Unités de mesure"],
"Voltios": ["milliVolts","Volts","kiloVolts"]  , 
"Ohms":["milliOhms","Ohms","kiloOhoms"],
"Amperes":["milliAmpères","Ampères","kiloAmpères"],
"Watts":["milliWatts","Watts","kiloWatts"],
"Idiomas":["Anglais","Espagnol","Frances","Allemand","Portugais","Italien","Chinois"],
"Resistencia_No_Cero":["La résistance doit être supérieure à zéro"],
"Solo_Numeros":["Entrez simplement des chiffres"], 
"Division_por_Cero":["La division par zéro"],
"Potencia_Total":["Puissance totale"],
"R_EQ":["R Equivalent"],
"V_NORTON":["V Norton"],
"I_TH":["I Thevenin"],
"Mensaje":["Message"],
"Configuracion":["Options"],

"Ingles:":["Anglais"],
"Espannol:":["Espagnol"],
"Frances:":["Frances"],
"Aleman:":["Allemand"],
"Portugues:":["Portugais"],
"Italiano:":["Italien"],
"Chino:":["Chinois"]

}  },


{"lang":"de", "words":{  

"Agregar_Resistencia":["In Resistance"]  , 
"Calculo_Totales":["Berechnung der Gesamtsummen"] , 
"Ir_Div":["Zum Tension Divider","Zum Stromteiler"],
"Ir_Div_Tension":["Zum Tension Divider"],
"Ir_Div_Corr":["Zum Stromteiler"],
"Fuente":["Strom","Spannung"],
"Corriente":["Strom"],
"Voltaje":["Spannung"],
"Resistencia":["Widerstand"],
"Potencia":["Power"],
"Numeros_Decimales":["Dezimalzahlen"],
"Diagrama":["Liniendiagramm"],
"Sombra":["Schatten"],
"Cambio_DV_DC":["Kommutierung von Teilern"],
"Opcion1Conmutacion":["Insgesamt Constant Power"],
"Opcion2Conmutacion":["Keine Änderung von Fountains Werte"],
"Unidades_De_Medida":["Maßeinheiten"],
"Voltios": ["milliVolt","volti","kiloVolt"]  , 
"Ohms":["milliOhms","Ohms","kiloOhoms"],
"Amperes":["milliAmpere","Ampere","kiloAmpere"],
"Watts":["miliVatios","Vatios","kiloVatios"],
"Idiomas":["Englisch","Spanisch","Frances","Deutsch","Portugiesisch","Italienisch","Chinesisch"],
"Resistencia_No_Cero":["Der Widerstand sollte größer sein als null"],
"Solo_Numeros":["Geben Sie nur Zahlen"], 
"Division_por_Cero":["Division durch Null"],
"Potencia_Total":["Gesamtleistung"],
"R_EQ":["R Equivalent"],
"V_NORTON":["V Norton"],
"I_TH":["I Thevenin"],
"Mensaje":["Mensaje"],
"Configuracion":["Optionen"],

"Ingles:":["Englisch"],
"Espannol:":["Spanisch"],
"Frances:":["Frances"],
"Aleman:":["Deutsch"],
"Portugues:":["Portugiesisch"],
"Italiano:":["Italienisch"],
"Chino:":["Chinesisch"]
}},

{"lang":"pt", "words":{  


"Agregar_Resistencia":["Adicionar Resistência"]  , 
"Calculo_Totales":["Calcular Totais"] , 
"Ir_Div":["Ir para Divisor de tensão","Ir para divisor de corrente"],
"Ir_Div_Tension":["Ir para Divisor de tensão"],
"Ir_Div_Corr":["Ir para divisor de corrente"],
"Fuente":["Corrente","Tensão"],
"Corriente":["Corrente"],
"Voltaje":["Tensão"],
"Resistencia":["Resistência"],
"Potencia":["Poder"],
"Numeros_Decimales":["Números decimais"],
"Diagrama":["Diagrama de Linha"],
"Sombra":["Sombra"],
"Cambio_DV_DC":["Comutação de divisores"],
"Opcion1Conmutacion":["Potência total constante"],
"Opcion2Conmutacion":["Nenhuma mudança de valores Fontes"],
"Unidades_De_Medida":["Unidades de Medida"],
"Voltios": ["miliVolts","volt","quiloVolts"]  , 
"Ohms":["miliOhms","Ohms","kiloOhms"],
"Amperes":["miliAmperes","Amperes","kiloAmperes"],
"Watts":["miliWatts","Watts","quiloWatt"],
"Idiomas":["Inglês","Espanhol","Frances","Alemão","Português","Italiano","Chinês"],
"Resistencia_No_Cero":["Resistência deve ser maior que zero"],
"Solo_Numeros":["Digite apenas números"], 
"Division_por_Cero":["Division by Zero "],
"Potencia_Total":["Potência total"],
"R_EQ":["R Equivalent"],
"V_NORTON":["V Norton"],
"I_TH":["I Thevenin"],
"Mensaje":["Mensaje"],
"Configuracion":["Opções"],

"Ingles:":["Inglês"],
"Espannol:":["Espanhol"],
"Frances:":["Frances"],
"Aleman:":["Alemão"],
"Portugues:":["Português"],
"Italiano:":["Italiano"],
"Chino:":["Chinês"]
}  },


{"lang":"it", "words":{  

"Agregar_Resistencia":["Aggiungi Resistenza"]  , 
"Calculo_Totales":["Calcola Totali"] , 
"Ir_Div":["Vai a Divider Tension","Vai a partitore di corrente"],
"Ir_Div_Tension":["Vai a Divider Tension"],
"Ir_Div_Corr":["Vai a partitore di corrente"],
"Fuente":["Corrente","Tensione"],
"Corriente":["Corrente"],
"Voltaje":["Tensione"],
"Resistencia":["Resistenza"],
"Potencia":["Potenza"],
"Numeros_Decimales":["Numeri decimali"],
"Diagrama":["Linea Diagramma"],
"Sombra":["Ombra"],
"Cambio_DV_DC":["Commutazione di divisori"],
"Opcion1Conmutacion":["Potenza totale costante"],
"Opcion2Conmutacion":["Nessun cambiamento dei valori Fontane"],
"Unidades_De_Medida":["Unità di misura"],
"Voltios": ["milliVolt","voltios","chiloVolt"]  , 
"Ohms":["milliOhms","Ohms","kiloOhms"],
"Amperes":["milliAmpere","Amps","milliAmpere"],
"Watts":["milliWatt","Watt","killoWatts"],
"Idiomas":["Inglese","Spagnolo","Frances","Tedesco","Portoghese","Italiano","Cinese"],
"Resistencia_No_Cero":["La resistenza deve essere maggiore di zero"],
"Solo_Numeros":["Inserire solo numeri"], 
"Division_por_Cero":["Division by Zero"],
"Potencia_Total":["Potenza totale"],
"R_EQ":["R Equivalent"],
"V_NORTON":["V Norton"],
"I_TH":["I Thevenin"],
"Mensaje":["Mensaje"],
"Configuracion":["Opzioni"],


"Ingles:":["Inglese"],
"Espannol:":["Spagnolo"],
"Frances:":["Frances"],
"Aleman:":["Tedesco"],
"Portugues:":["Portoghese"],
"Italiano:":["Italiano"],
"Chino:":["Cinese"]
}  },


{"lang":"ch", "words":{  

"Agregar_Resistencia":["Add Resistence"]  , 
"Calculo_Totales":["Total Calcs"] , 
"Ir_Div":["Go To Tension Divider","Go To Current Divider"],
"Ir_Div_Tension":["Go To Tension Divider"],
"Ir_Div_Corr":["Go To Current Divider"],
"Fuente":["Current","Voltage"],
"Corriente":["Current"],
"Voltaje":["Voltage"],
"Resistencia":["Resistence"],
"Potencia":["Power"],
"Numeros_Decimales":["Decimal Numbers"],
"Diagrama":["Line Diagram"],
"Sombra":["Shade"],
"Cambio_DV_DC":["To Change Dividers"],
"Opcion1Conmutacion":["Total Pöwer Constant"],
"Opcion2Conmutacion":["Source Value not change"],
"Unidades_De_Medida":["Units Meassure"],
"Voltios": ["miliVolts","Volts","kiloVolts"]  , 
"Ohms":["miliOhms","Ohms","kiloOhoms"],
"Amperes":["miliAmperes","Amperes","kiloAmperes"],
"Watts":["miliWatt","Watt","kiloWatts"],
"Idiomas":["English","Spanish","French","German","Portugues","Italian","Chinese"],
"Resistencia_No_Cero":["Value Resistence should be greather than cero"],
"Division_por_Cero":["Division by Cero"],
"Solo_Numeros":["Enter only numeric values"], 
"Potencia_Total":["Potencia_Total"],
"R_EQ":["R Equivalente"],
"V_NORTON":["V Norton"],
"I_TH":["I Thevenin"],
"Mensaje":["Mensaje"],
"Configuracion":["Opções"],


"Ingles:":["English"],
"Espannol:":["Spanish"],
"Frances:":["French"],
"Aleman:":["German"],
"Portugues:":["Portuguesse"],
"Italiano:":["Italian"],
"Chino:":["Chinese"]
}  },


]


}


var arrayImpedancias;
/*
isShadow = document.configurar.isShadow.checked;
swDIV= getValorRadioButton(document.configurar.swDIV);
unidadVoltaje =  getValorRadioButton(document.configurar.unidadVoltaje);
unidadResistencia =  getValorRadioButton(document.configurar.unidadResistencia);
unidadCorriente =  getValorRadioButton(document.configurar.unidadCorriente);
idioma=getValorRadioButton(document.configurar.idioma);
decimals= getValorRadioButton(document.configurar.numberDecimal);
unidadPotencia= getValorRadioButton(document.configurar.unidadPotencia);
*/
leerEnMemoria();
if (dd!=null){

arrayImpedancias = dd.impedancias;


}


var valor_ = document.getElementById("valor_fuente").value;

valor = parseFloat(valor_);
dd= new PanelSerieParalelo("0",tipoC,valor,isShadow,unidadVoltaje,unidadCorriente,unidadResistencia,unidadPotencia );
actualizar();
if (arrayImpedancias!=null) {

	dd.setImpedancias(arrayImpedancias);

}




}


function leerEnMemoria(){
 if (!window.localStorage){
 isShadow = document.configurar.isShadow.checked;
swDIV= getValorRadioButton(document.configurar.swDIV);
unidadVoltaje =  getValorRadioButton(document.configurar.unidadVoltaje);
unidadResistencia =  getValorRadioButton(document.configurar.unidadResistencia);
unidadCorriente =  getValorRadioButton(document.configurar.unidadCorriente);
unidadPotencia =  getValorRadioButton(document.configurar.unidadPotencia);
idioma=getValorRadioButton(document.configurar.idioma);
decimals= getValorRadioButton(document.configurar.numberDecimal);
return;
}else{

if (!window.localStorage.getItem("isShadow")){
isShadow = document.configurar.isShadow.checked;
}else{
isShadowS = window.localStorage.getItem("isShadow");
document.configurar.isShadow.checked=(isShadowS=="true");


}

if (!window.localStorage.getItem("swDIV")){
swDIV= getValorRadioButton(document.configurar.swDIV);
}else{
swDIV= window.localStorage.getItem("swDIV");
setValorRadioButton(document.configurar.swDIV,swDIV);
}
if (!window.localStorage.getItem("unidadVoltaje" )){
unidadVoltaje =  getValorRadioButton(document.configurar.unidadVoltaje);
}else{
unidadVoltaje =  window.localStorage.getItem("unidadVoltaje");
setValorRadioButton(document.configurar.unidadVoltaje,unidadVoltaje);
}
if (!window.localStorage.getItem("unidadResistencia")){
unidadResistencia =  getValorRadioButton(document.configurar.unidadResistencia);
}else{
unidadResistencia =  window. localStorage.getItem("unidadResistencia");
setValorRadioButton(document.configurar.unidadResistencia,unidadResistencia);
}
if (!window.localStorage.getItem("unidadCorriente" )){
unidadCorriente =  getValorRadioButton(document.configurar.unidadCorriente);
}else{
unidadCorriente =  window.localStorage.getItem("unidadCorriente");
setValorRadioButton(document.configurar.unidadCorriente,unidadCorriente);
}
if (!window.localStorage.getItem("unidadPotencia")){
unidadPotencia =  getValorRadioButton(document.configurar.unidadPotencia);
}else{
unidadPotencia =  window.localStorage.getItem("unidadPotencia");
setValorRadioButton(document.configurar.unidadPotencia,unidadPotencia);
}
if (!window.localStorage.getItem("idioma")){
idioma=getValorRadioButton(document.configurar.idioma);
}else{
idioma=window.localStorage.getItem("idioma");
setValorRadioButton(document.configurar.idioma,idioma);
}
if (!window.localStorage.getItem("decimals" )){
decimals= getValorRadioButton(document.configurar.numberDecimal);
}else{
decimals= window.localStorage.getItem("decimals");
setValorRadioButton(document.configurar.numberDecimal,decimals);
}
if (!window.localStorage.getItem("tipoC")){
tipoC="1";
}else{
tipoC=window.localStorage.getItem("tipoC");

}
    }


}

function guardarEnMemoria(){

isShadow = document.configurar.isShadow.checked;
swDIV= getValorRadioButton(document.configurar.swDIV);
unidadVoltaje =  getValorRadioButton(document.configurar.unidadVoltaje);
unidadResistencia =  getValorRadioButton(document.configurar.unidadResistencia);
unidadCorriente =  getValorRadioButton(document.configurar.unidadCorriente);
unidadPotencia =  getValorRadioButton(document.configurar.unidadPotencia);
idioma=getValorRadioButton(document.configurar.idioma);
decimals= getValorRadioButton(document.configurar.numberDecimal);

 if (!window.localStorage){
return;
}
else
{
window.localStorage.setItem("isShadow" ,isShadow);
window.localStorage.setItem("swDIV" ,swDIV);
window.localStorage.setItem("unidadVoltaje" ,unidadVoltaje);
window.localStorage.setItem("unidadResistencia" ,unidadResistencia);
window.localStorage.setItem("unidadCorriente" ,unidadCorriente);
window.localStorage.setItem("unidadPotencia" ,unidadPotencia);
window.localStorage.setItem("idioma" ,idioma);
window.localStorage.setItem("decimals" ,decimals);
window.localStorage.setItem("tipoC" ,tipoC);
}

}

var h=0;
var state="0";

function addLine (a,b, index){

this.tabla_ = document.getElementById("tabla");

var el1= document.createElement("tr");
var kk = a;
el1.setAttribute("id",kk);
var col1 = document.createElement("td");

var col2 = document.createElement("td");

var col3 = document.createElement("td");

var col4 = document.createElement("td");
var col5 = document.createElement("td");
var col6 = document.createElement("td");
col3.setAttribute("id",a+"V");
col4.setAttribute("id",a+"I");
col5.setAttribute("id",a+"P");


var tn1 = document.createTextNode(a);
var tn2 = document.createTextNode(b);

var k="\u2718";
var tn6 = document.createTextNode(k);

var tn3 = document.createElement("a");
tn3.setAttribute("href","#");
tn3.setAttribute("style","font: 20px/100%;font-family: Arial Unicode MS;");
tn3.setAttribute("class","simbolo");
//tn3.setAttribute("class","button gray");
tn3.setAttribute("style","width:35px;");
tn3.setAttribute("onclick","deleteLine('"+kk+"');");

/*
var image = document.createElement("img");
image.setAttribute("src","erase.png");
image.setAttribute("width","12");
image.setAttribute("height","12");
tn3.appendChild(image);
*/
tn3.appendChild(tn6);

el1.appendChild(col1);
el1.appendChild(col2);
el1.appendChild(col3);

el1.appendChild(col4);
el1.appendChild(col5);
el1.appendChild(col6);

col1.appendChild(tn1);
col2.appendChild(tn2);
col6.appendChild(tn3);
this.tabla_.appendChild(el1);

colorFilas();

//alert(this.tabla_.childNodes.length);


}


function actualizar(){


isShadow = document.configurar.isShadow.checked;
swDIV= getValorRadioButton(document.configurar.swDIV);
unidadVoltaje =  getValorRadioButton(document.configurar.unidadVoltaje);
unidadResistencia =  getValorRadioButton(document.configurar.unidadResistencia);
unidadCorriente =  getValorRadioButton(document.configurar.unidadCorriente);
unidadPotencia =  getValorRadioButton(document.configurar.unidadPotencia);
idioma=getValorRadioButton(document.configurar.idioma);
decimals= getValorRadioButton(document.configurar.numberDecimal);

guardarEnMemoria();

//dd.datos_basicos.tipo_coordenada=
//dd.datos_basicos.tipo_circuito
//dd.datos_basicos.valor_fuente
//dd.datos_basicos.req
dd.datos_basicos.isShadow=isShadow;
dd.datos_basicos.unidadVoltaje=unidadVoltaje;
dd.datos_basicos.unidadCorriente=unidadCorriente;
dd.datos_basicos.unidadResistencia=unidadResistencia;
dd.datos_basicos.unidadPotencia=unidadPotencia;

calcular();

 localizar("Numeros_Decimales",0,"dn");
 localizar("Voltaje",0,"v1");
 localizar("Resistencia",0,"r1");
 localizar("Corriente",0,"c1");
 localizar("Potencia",0,"p11");
 localizar("Resistencia",0,"r2");
 localizar("Fuente",state,"c2");
 localizar("Resistencia",0,"r1");
 localizar("Corriente",0,"c1");
 localizar("Ir_Div",state,"accion");
 localizar("Potencia_Total",0,"tpower");

localizar("R_EQ",0,"req");
localizar("V_NORTON",0,"vnorton");
localizar("I_TH",0,"ith");
localizar("Mensaje",0,"mensaje");

localizar("Agregar_Resistencia",0,"addr");


localizar("Diagrama",0,"diag_l");
localizar("Sombra",0,"sh");
localizar("Cambio_DV_DC",0,"bch");
localizar("Opcion1Conmutacion",0,"tpc");
localizar("Opcion2Conmutacion",0,"ncs");
localizar("Unidades_De_Medida",0,"mu");

localizar("Voltaje",0,"v3");
localizar("Voltios",0,"mv3");
localizar("Voltios",1,"vv3");
localizar("Voltios",2,"kv3");

localizar("Corriente",0,"c3");
localizar("Amperes",0,"mc3");
localizar("Amperes",1,"cc3");
localizar("Amperes",2,"kc3");

localizar("Resistencia",0,"r3");
localizar("Ohms",0,"mr3");
localizar("Ohms",1,"rr3");
localizar("Ohms",2,"kr3");

localizar("Potencia",0,"pw3");
localizar("Watts",0,"mpw3");
localizar("Watts",1,"cpw3");
localizar("Watts",2,"kpw3");

localizar("Watts",unidadPotencia,"tp");
localizar("Ohms",unidadResistencia,"tro");
localizar("Voltios",unidadVoltaje,"tvn");
localizar("Amperes",unidadCorriente,"tit");
localizar("Configuracion",0,"boton_configurar");


localizar("Idiomas",0,"eng");
localizar("Idiomas",1,"es");
localizar("Idiomas",2,"fr");
localizar("Idiomas",3,"de");
localizar("Idiomas",4,"pt");
localizar("Idiomas",5,"it");



localizar("Ohms",unidadResistencia,"u2");
if (state==0){

localizar("Amperes",unidadCorriente,"u1")

}else{

localizar("Voltios",unidadVoltaje,"u1");


}

}

function localizar(clave, index,id){

var vv =lenguajes.languajes[idioma].words[clave][index];

var el= document.getElementById(id);
el.innerHTML=vv;

return vv;


}



function deleteLine(id){

var tabla_ = document.getElementById("tabla");
var el=  document.getElementById(id);

tabla_.removeChild(el);
if (dd.deleteImpedancia(id)){
 
  borrarYDibujar()
}

if (tabla_.childNodes.length==2){
               var t1 = document.getElementById("supTabla");
	t1.setAttribute("style","visibility:hidden;width:400px;height:600px;z-index:0");

}

//colorFilas();
calcular();
}


function mostrarConfiguracion(){

var dd = document.getElementById("boton_configurar");
dd.setAttribute("href","#configurar");

}



function popupMensaje(cc, mensaje, elementoGenerador){

if (cc==1){

var cc1=elementoGenerador;
//var cc1 = document.getElementById("nueva_resistencia");
var cc2 = document.getElementById("mensaje");
var tn1;

if (!(mensaje instanceof HTMLElement)){
tn1 = document.createTextNode(mensaje);
}
else{
tn1=mensaje;
}

if (cc2.hasChildNodes()){cc2.removeChild(cc2.childNodes[0]);}
cc2.appendChild(tn1);

//cc2.innerHTML=mensaje;



cc1.setAttribute("href","#popup_mensaje");

}

else{

var cc1 = document.getElementById("nueva_resistencia");
cc1.setAttribute("href","#");

}

}



function add(){
var valor_ = document.getElementById("valor_fuente").value;
var r1 = document.getElementById("valor_r").value;

//var r1=ToMagnitudUno(r1_, unidadResistencia);

if (dd.impedancias.length<15){

if (validarReal(r1)&(validarReal(valor_))){

if (r1!=0){

var t1 = document.getElementById("supTabla");
t1.setAttribute("style","visibility:visible;width:400px;height:600px;z-index:0");


var r= parseFloat(r1);
var id= "R"+(h+1);
dd.addImpedancia(id,r);

addLine(id,r, h);
h++;

popupMensaje("0","",document.getElementById("nueva_resistencia"));
dibujar();
calcular();

}else{
//alert(idioma);
popupMensaje("1",localizar("Resistencia_No_Cero",0,"mensaje"),document.getElementById("nueva_resistencia"));
}

}else{

popupMensaje("1",localizar("Solo_Numeros",0,"mensaje"),document.getElementById("nueva_resistencia"));


}

}else{


//alert("Se admiten hasta 15 resistencias");



}

}




function tabla(){

this.tabla_ = document.getElementById("tabla");

}


tabla.prototype.ElementoClicked=function(evento){

var imp_ = evento.idElemento;

colorFilas();

var fila= document.getElementById(imp_);

fila.style.background="#f47c20";



}

function colorFilas(){
this.tabla_ = document.getElementById("tabla");
var col=false;
for (i=1; ele = this.tabla_.getElementsByTagName('tr')[i]; i++) {
    ele.style.background = (col) ? 'white' : '#cccccc';
    col = !col;
  }


}

function colorFilasTabla2(){
this.tabla_ = document.getElementById("tabla2");
var col=false;
for (i=0; ele = this.tabla_.getElementsByTagName('tr')[i]; i++) {
    ele.style.background = (col) ? 'white' : '#cccccc';
    col = !col;
  }


}

function cambiarTipo(){

var v1=document.getElementById("Campo");



switch ( swDIV){

case "0":

var vFinal=0;
var valor_1 = document.getElementById("valor_fuente").value;
var vFinal= dd.getMagnitudFuenteAlterna(valor_1);
document.getElementById("valor_fuente").value= vFinal;

break;


}



if  (state=="0"){

state="1";
a();

}else{

state="0";
b();


}


}



function a(){

var v1=document.getElementById("Campo");

v1.value="1";

localizar("Fuente",state,"c2");
//localizar("Ir_Div_Corr",0,"accion");
localizar("Ir_Div",state,"accion");

iniciar("1");

dibujar();
calcular();
}

function b(){

var v1=document.getElementById("Campo");

//localizar("Fuente",state,"c2");

//localizar("Ir_Div_Tension",0,"accion");
localizar("Ir_Div",state,"accion");

v1.value="0";
iniciar("0");
dibujar();
calcular();
} 


function borrarYDibujar(){
var cc= new Circuitor();
cc.borrarYConstruir(dd);


}

function dibujar(){

var cc= new Circuitor();
var tabla_= new tabla();
cc.mia.setListenerClickElemento(tabla_);
cc.construir(dd);

}

function mostrarTablaTotales(){

var pT= dd.getPotenciaTotal();
var rEq= dd.getREquivalente();
var iNorton = dd.INorton();
var VTh=dd.VThevenin();

v1=pT.toFixed(decimals);
var tn1 = document.createTextNode(v1);

v2=rEq.toFixed(decimals); 
var tn2 = document.createTextNode(v2);

v3=iNorton.toFixed(decimals); 
var tn3 = document.createTextNode(v3);

v4=VTh.toFixed(decimals); 
var tn4 = document.createTextNode(v4);

var d1= document.getElementById("pT");
var d2= document.getElementById("rEq");
var d3= document.getElementById("IT");
var d4= document.getElementById("VN");

if (d1.hasChildNodes()){d1.removeChild(d1.childNodes[0]);}
if (d2.hasChildNodes()){d2.removeChild(d2.childNodes[0]);}
if (d3.hasChildNodes()){d3.removeChild(d3.childNodes[0]);}
if (d4.hasChildNodes()){d4.removeChild(d4.childNodes[0]);}

d1.appendChild(tn1);
d2.appendChild(tn2);
d3.appendChild(tn3);
d4.appendChild(tn4);

colorFilasTabla2();

}


function validarReal(strValue){

 var objRegExp  =  /(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/;
  return objRegExp.test(strValue);

}

function calcular(){

var valor_ = document.getElementById("valor_fuente").value;
if (validarReal(valor_)){
valor = parseFloat(valor_);
dd.datos_basicos.valor_fuente=valor;
var impedancias = dd.resolver();
var n= impedancias.length;

for  (var i=0;i<n;i++){


var imp_ = impedancias[i];

//alert(imp_.id+" " +imp_.r+" "+imp_.v+"  "+ imp_.p+"  "+imp_.i);
var id = imp_.id;

var v1= imp_.v;

var p1 = imp_.p;

var i1 = imp_.i;

var d1= document.getElementById(id+"V");
var d2= document.getElementById(id+"P");
var d3= document.getElementById(id+"I");

v1=formato_numero(v1, decimals, ".", ",")
p1=formato_numero(p1, decimals, ".", ",")
i1=formato_numero(i1, decimals, ".", ",")



var tn1 = document.createTextNode(v1);
var tn2 = document.createTextNode(p1);
var tn3 = document.createTextNode(i1);

if (d1.hasChildNodes()){

d1.removeChild(d1.childNodes[0]);

}

if (d2.hasChildNodes()){

d2.removeChild(d2.childNodes[0]);

}

if (d3.hasChildNodes()){

d3.removeChild(d3.childNodes[0]);

}


d1.appendChild(tn1);
d2.appendChild(tn2);
d3.appendChild(tn3);

mostrarTablaTotales();

}

}

}


function formato_numero(numero, decimales, separador_decimal, separador_miles){ // v2007-08-06
    numero=parseFloat(numero);
    if(isNaN(numero)){
        return "";
    }

    if(decimales!==undefined){
        // Redondeamos
        numero=numero.toFixed(decimales);
    }

    // Convertimos el punto en separador_decimal
    numero=numero.toString().replace(".", separador_decimal!==undefined ? separador_decimal : ",");

    if(separador_miles){
        // Añadimos los separadores de miles
        var miles=new RegExp("(-?[0-9]+)([0-9]{3})");
        while(miles.test(numero)) {
            numero=numero.replace(miles, "$1" + separador_miles + "$2");
        }
    }

    return numero;
}


function setValorRadioButton(radioObj,valueSeek){

	if(!radioObj)
		return ;
	var radioLength = radioObj.length;
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].value==valueSeek) {
			radioObj[i].checked=true;
			return;
		}
	}
	




}


function getValorRadioButton(radioObj) {
	if(!radioObj)
		return "";
	var radioLength = radioObj.length;
	if(radioLength == undefined)
		if(radioObj.checked)
			return radioObj.value;
		else
			return "";
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
			return radioObj[i].value;
		}
	}
	return "";
}


