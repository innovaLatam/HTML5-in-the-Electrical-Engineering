function Circuitor(){

this.clave1=0;
this.listener=null;

//alert(aa.impedancias[0].q);

this.mia= document.getElementById("hola");



this.ctx = this.mia.getContext("2d");



}

HTMLElement.prototype = new function(){

this.listener=null;


}

HTMLElement.prototype.setListenerClickElemento=function(listener_){

this.listener=listener_;

}


HTMLElement.prototype.fireEventoClickElemento=function(evento){

	if (this.listener!=null){
	
			this.listener.ElementoClicked(evento);

	}


}


var currentSource=  function(ctx,x1,y1){
this.id=null;

ctx.beginPath();
ctx.fillStyle="yellow";
ctx.arc(x1,y1+115,15,0,Math.PI*2,true);
ctx.fill();
ctx.closePath();
ctx.moveTo(x1,y1);
ctx.lineTo(x1,y1+100);
ctx.fillStyle="red";

ctx.moveTo(x1,y1+130);
ctx.lineTo(x1,y1+230);

ctx.moveTo(x1,y1+115-8);
ctx.lineTo(x1,y1+115+10);

ctx.moveTo(x1,y1+115-8);
ctx.lineTo(x1-3,y1+115-8+3);

ctx.moveTo(x1,y1+115-8);
ctx.lineTo(x1+3,y1+115-8+3);

ctx.stroke();

this.x=x1;
this.y=y1+115;

this.minX=x1;
this.minY=y1;
this.maxX=x1;
this.maxY=y1+230;

}

function arrastrar(){

clave1="0";
mia.style.cursor='pointer';
//mia.ondblclick="terminarArrastrar()";

}

function terminarArrastrar(){
if (clave="0"){

mia.style.cursor='default';

}


}


var currentVoltaje = function(ctx, x1, y1){

this.id=null;
ctx.beginPath();
ctx.fillStyle="yellow";
ctx.arc(x1,y1+115,15,0,Math.PI*2,true);
ctx.fill();


var k1="\u00B1";
ctx.fillStyle="green";
ctx.font="12pt Arial Unicode MS";
ctx.textBaseline = 'top';
ctx.fillText(k1,x1-4,y1+100);
var bb=x1-4;
var dd= y1+115;


/*
ctx.moveTo(x1-5+5,y1+115);
ctx.arc(x1-5,y1+115,5,0,Math.PI,true);
ctx.moveTo(x1+5+5,y1+115);
ctx.arc(x1+5,y1+115,5,0,Math.PI,false);
*/


ctx.moveTo(x1,y1);
ctx.lineTo(x1,y1+100);
ctx.fillStyle="red";

ctx.moveTo(x1,y1+130);
ctx.lineTo(x1,y1+230);

//ctx.moveTo(x1,y1+115-8);
//ctx.lineTo(x1,y1+115+10);

//ctx.moveTo(x1,y1+115-8);
//ctx.lineTo(x1-3,y1+115-8+3);

//ctx.moveTo(x1,y1+115-8);
//ctx.lineTo(x1+3,y1+115-8+3);

ctx.stroke();

this.x=x1;
this.y=y1+115;

this.minX=x1;
this.minY=y1;
this.maxX=x1;
this.maxY=y1+230;


}

var impedanceParalell = function(ctx,x1,y1,a){

this.id=a.id;

ctx.fillStyle="red";
ctx.beginPath();
ctx.moveTo(x1,y1);
ctx.lineTo(x1+50,y1);
ctx.lineTo(x1+50,y1+100);
ctx.fillRect(x1+50-5,y1+100,10,30);

var idR=a.id;
ctx.font         = 'italic 10px sans-serif';
ctx.textBaseline = 'top';
ctx.fillText  (idR, x1+50-26, y1+110);


ctx.moveTo(x1+50,y1+130);
ctx.lineTo(x1+50,y1+230);
ctx.lineTo(x1,y1+230);

ctx.moveTo(x1+50+15,y1+80);
ctx.lineTo(x1+50+15,y1+150);
ctx.lineTo(x1+50+15-3,y1+150-3);
ctx.moveTo(x1+50+15,y1+150);
ctx.lineTo(x1+50+15+3,y1+150-3);

ctx.stroke();

this.x=x1+50;
this.y=y1+100+15

}

var impedanceSerie= function(ctx,x1,y1,a){

this.id=a.id;

ctx.fillStyle="red";
ctx.beginPath();
ctx.moveTo(x1,y1);
ctx.lineTo(x1+25,y1);
ctx.fillRect(x1+25,y1-5,30,10);

var idR=a.id;
ctx.font         = 'italic 10px sans-serif';
ctx.textBaseline = 'top';
ctx.fillText  (idR, x1+25+10, y1+15);

ctx.moveTo(x1+25+30,y1);
ctx.lineTo(x1+25+30+25,y1);

ctx.stroke();

this.x=x1+25+15;
this.y=y1;

this.minX=x1;
this.maxX=x1+25+30+25;

}

var cXY= function(ctx,xa,ya, x1,y1){

ctx.fillStyle="red";
ctx.beginPath();
ctx.moveTo(xa,ya);
ctx.moveTo(xa,ya-200);
ctx.moveTo(xa+200,ya);
ctx.moveTo(xa,ya);


}

Circuitor.prototype.borrarYConstruir= function(valores){

//alert("Hola "+this.mia.width + "  "+ this.mia.height );

//this.ctx.width = this.ctx.width

this.ctx.clearRect(0,0,this.mia.width, this.mia.height);
this.construir(valores);


}

Circuitor.prototype.construir=function(valores){

this.ctx.clearRect(0,0,this.mia.width, this.mia.height);
var g = new Array();
var mapeoSerie = {
datos:[
{A:1,B:0},
{A:2,B:0},
{A:2,B:1},
{A:2,B:2},
{A:3,B:2},
{A:3,B:3},
{A:4,B:3},
{A:4,B:4},
{A:5,B:4},
{A:5,B:5},
{A:6,B:5},
{A:6,B:6},
{A:7,B:6},
{A:7,B:7},
{A:8,B:7},

{A:8,B:8},
{A:9,B:8},
{A:9,B:9},
{A:10,B:9},
{A:10,B:10},
{A:11,B:10},
]
};




var a1= valores.datos_basicos.tipo_coordenada;
var a2= valores.datos_basicos.tipo_circuito;
var a3= valores.datos_basicos.valor_fuente;
var isShadow = valores.datos_basicos.isShadow;

if (isShadow){

this.ctx.shadowOffsetX = 5;
this.ctx.shadowOffsetY = 5;
this.ctx.shadowBlur    = 4;
this.ctx.shadowColor   = 'rgba(255, 0, 0, 0.5)';
this.ctx.fillStyle     = '#00f';


}else{

this.ctx.shadowOffsetX = 0;
this.ctx.shadowOffsetY =0;
this.ctx.shadowBlur    = 0;
//his.ctx.shadowColor   = 'rgba(255, 0, 0, 0.5)';
//this.ctx.fillStyle     = '#00f';




}

if (a2=="0"){


var zzz = new currentSource(this.ctx,30,10);
g[0]=zzz;

var index=0;

for (var i=0;i<valores.impedancias.length;i++){
 var a5= valores.impedancias[i];
  var zzz2= new impedanceParalell(this.ctx,30+index,10,a5);
  index+=50;
  g[i+1]=zzz2;
}

}

else if (a2=="1")

{

var zzz = new currentVoltaje(this.ctx,30,10);
g[0]=zzz;

var index1=zzz.minX;
var nZ = valores.impedancias.length;
if (nZ!=0){
var l1 = mapeoSerie.datos[nZ-1].A;
var l2 = mapeoSerie.datos[nZ-1].B;

//alert(nz+"  "+l1+ "   "+l2);

for (var i=0;i<l1;i++){
  var a5= valores.impedancias[i];
  var zzz2= new impedanceSerie(this.ctx,index1,zzz.minY,a5);
  index1=zzz2.maxX;
  g[i+1]=zzz2;
}


var index2=index1;
var index1=zzz.minX;

for (var j=(i);j<(i+l2);j++){


 var a5= valores.impedancias[j];
  var zzz2= new impedanceSerie(this.ctx,index1,zzz.maxY,a5);
 var  index1=zzz2.maxX;
 // g[i+j+1]=zzz2;
 g[j+1]=zzz2;
}



this.ctx.moveTo(index1,zzz.maxY);
this.ctx.lineTo(index2,zzz.maxY);
this.ctx.lineTo(index2,zzz.minY);
this.ctx.stroke();

}

}

/*
this.mia.onmousemove=function(e){

var xc = e.offsetX;
var yc = e.offsetY;

this.style.cursor='default';

for (var i=0;i<g.length;i++){

if (((xc>=g[i].x-8)&(xc<=g[i].x+8))


     & ((yc>=g[i].y-8)&(yc<=g[i].y+8)) ){


	this.style.cursor='pointer';
	return;


}

}

}

*/







this.mia.onclick=function(e){

var xc =e.offsetX;
var yc = e.offsetY;

var acu="";


var aaaa="";
for (var i=0;i<g.length;i++){


acu+="\nG["+i+"]="+g[i].x+"  " +g[i].y +"  xc="+xc+ "  yc="+yc+"\n";

if (((xc>=g[i].x-8)&(xc<=g[i].x+8))


     & ((yc>=g[i].y-8)&(yc<=g[i].y+8)) ){

	var id= g[i].id;
                if (id!=null){
	var evento = new  EventoClickElemento(id);
	this.fireEventoClickElemento(evento);
	}
	return;


}

}



}



}



function EventoClickElemento(idElemento_){

this.idElemento=idElemento_;


}

function escalar(){

ctx.scale(0.5,0.5);

}

function PanelSerieParalelo(tipo_coord, tipo_circ, valor_fuente,is_Shadow, unidad_voltaje, unidad_corriente, unidad_resistencia,unidad_potencia){

this.multiplicador={"0":0.001,"1":1,"2":1000}


 this.datos_basicos={
"tipo_coordenada":tipo_coord,
"tipo_circuito":tipo_circ,
"valor_fuente":valor_fuente,
"req":0,
"isShadow":is_Shadow,
"unidadVoltaje":unidad_voltaje,
"unidadCorriente":unidad_corriente,
"unidadResistencia":unidad_resistencia,
"unidadPotencia":unidad_potencia

}
this.impedancias= new Array();

}

PanelSerieParalelo.prototype.getMagnitudFuenteAlterna= function(valorFuenteActual){

var v1 =  this.datos_basicos.tipo_circuito;

switch (v1){

case "0":

return this.getVoltajePotenciaTotalCte(valorFuenteActual);

case "1":

return this.getCorrientePotenciaTotalCte(valorFuenteActual);

}


}


PanelSerieParalelo.prototype.addImpedancia=function(id,valor_resistencia){

var imp_ = new impedancia(id,valor_resistencia);
this.impedancias[this.impedancias.length]=imp_;

}

PanelSerieParalelo.prototype.deleteImpedancia=function(id){

for (var i=0;i<this.impedancias.length;i++){

var idActual = this.impedancias[i].id;

if (idActual==id){

this.impedancias.splice(i,1);
return true;

}


}

return false;

}


PanelSerieParalelo.prototype.resolver = function(){

var tipoC = this.datos_basicos.tipo_circuito;

if (tipoC=="1"){

this.ResolverSerie();

}else if (tipoC=="0"){

this.ResolverParalelo();

}

return this.impedancias;

}

PanelSerieParalelo.prototype.getPotenciaTotal=function(){

var tipoC = this.datos_basicos.tipo_circuito;

if (tipoC=="1"){

return this.getPotenciaTotalDV();

}else if (tipoC=="0"){

return this.getPotenciaTotalDI();

}

}

PanelSerieParalelo.prototype.getREquivalente=function(){


var tipoC = this.datos_basicos.tipo_circuito;

if (tipoC=="1"){

return this.getREquivalenteSerie();

}else if (tipoC=="0"){

return this.getREquivalenteParalelo();

}


}

PanelSerieParalelo.prototype.VThevenin=function(){


var tipoC = this.datos_basicos.tipo_circuito;

if (tipoC=="1"){

return  this.datos_basicos.valor_fuente;

}else if (tipoC=="0"){

return  this.datos_basicos.valor_fuente*this.getREquivalente();

}


}

PanelSerieParalelo.prototype.INorton=function(){


var tipoC = this.datos_basicos.tipo_circuito;

if (tipoC=="1"){

if (this.getREquivalente()!=0){

return  this.datos_basicos.valor_fuente/this.getREquivalente();

}else{

return "";

}

}else if (tipoC=="0"){

return  this.datos_basicos.valor_fuente;

}


}


PanelSerieParalelo.prototype.ResolverSerie = function(){


 this.datos_basicos.req=this.getREquivalenteSerie();
for (var i=0;i<this.impedancias.length;i++){
var v1 =this.getVoltajeDV(i);
var i1= this.getCorrienteDV(i);
var p1= this.getPotenciaDV(i);

this.impedancias[i].p=p1;
this.impedancias[i].v=v1;
this.impedancias[i].i=i1;
}


}


PanelSerieParalelo.prototype.ResolverParalelo = function(){


 this.datos_basicos.req=this.getREquivalenteParalelo();
for (var i=0;i<this.impedancias.length;i++){

var v1 =this.getVoltajeDI(i);
var i1= this.getCorrienteDI(i);
var p1= this.getPotenciaDI(i);

this.impedancias[i].p=p1;
this.impedancias[i].v=v1;
this.impedancias[i].i=i1;
}




}


PanelSerieParalelo.prototype.getREquivalenteSerie=function(){
var resultado=0;
for  (var i=0;i<this.impedancias.length;i++){
var imp_=this.impedancias[i];
var valor = imp_.r;

resultado+=valor;



}


return resultado;

}

PanelSerieParalelo.prototype.getSumInversos=function(){

var resultado=0;
for  (var i=0;i<this.impedancias.length;i++){

var valor = this.impedancias[i].r;


resultado+=1/valor;

}


return (resultado);


}




PanelSerieParalelo.prototype.getREquivalenteParalelo=function(){

return (1/this.getSumInversos());

}

PanelSerieParalelo.prototype.getCorrientePotenciaTotalCte=function(voltajeConocido){

if ((this.getREquivalenteSerie()*this.getREquivalenteParalelo())!=0){

var v1= Math.sqrt(this.getREquivalenteSerie()*this.getREquivalenteParalelo());

var vC= this.multiplicador[this.datos_basicos.unidadVoltaje]*voltajeConocido;
var rC= this.multiplicador[this.datos_basicos.unidadResistencia]*v1;

var corriente =  voltajeConocido/(rC);

corriente = corriente /  this.multiplicador[this.datos_basicos.unidadCorriente];

return corriente;

}


}

PanelSerieParalelo.prototype.getVoltajePotenciaTotalCte=function(corrienteConocida){

var v1= Math.sqrt(this.getREquivalenteSerie()*this.getREquivalenteParalelo());

var iC=this.multiplicador[this.datos_basicos.unidadCorriente]*corrienteConocida;
var rC= this.multiplicador[this.datos_basicos.unidadResistencia]*v1;


var voltaje = iC*rC;

voltaje = voltaje / this.multiplicador[this.datos_basicos.unidadVoltaje];

return voltaje;

}

PanelSerieParalelo.prototype.getVoltajeDI=function(index){

var r1= this.impedancias[index].r;

var v =this.getCorrienteDI(index);

r1 = this.multiplicador[this.datos_basicos.unidadResistencia]*r1;

v= this.multiplicador[this.datos_basicos.unidadCorriente]*v;

var resultado = r1*v;

resultado = resultado/this.multiplicador[this.datos_basicos.unidadVoltaje];

return resultado;



}

PanelSerieParalelo.prototype.getCorrienteDI=function(index){

var v1= this.getSumInversos();
var r1= this.impedancias[index].r;
var v = this.datos_basicos.valor_fuente;
if (r1==0){throw new Exception("Division por cero");}

r1=this.multiplicador[this.datos_basicos.unidadResistencia]*r1;
v1=this.multiplicador[this.datos_basicos.unidadResistencia]*v1;
v=this.multiplicador[this.datos_basicos.unidadCorriente]*v;


var resultado= (1/r1)*v/v1;

resultado = resultado/this.multiplicador[this.datos_basicos.unidadCorriente];

return resultado;

}

PanelSerieParalelo.prototype.getVoltajeDV=function(index){

var r1= this.impedancias[index].r;

var v = this.datos_basicos.valor_fuente;

var z1 = this.getREquivalenteSerie();

if (z1==0){throw new Exception("Division por cero");}

r1=this.multiplicador[this.datos_basicos.unidadResistencia]*r1;
z1=this.multiplicador[this.datos_basicos.unidadResistencia]*z1;
v=this.multiplicador[this.datos_basicos.unidadVoltaje]*v;


var resultado = r1*v/z1;

resultado = resultado/this.multiplicador[this.datos_basicos.unidadVoltaje];

return resultado;

}

PanelSerieParalelo.prototype.getCorrienteDV=function(index){

var v1=this.getREquivalenteSerie();

var v2 = this.datos_basicos.valor_fuente;

if (v1==0){throw new Exception("Division por cero");}

v1=this.multiplicador[this.datos_basicos.unidadResistencia]*v1;
v2=this.multiplicador[this.datos_basicos.unidadVoltaje]*v2;


var resultado = v2/v1;

resultado= resultado/this.multiplicador[this.datos_basicos.unidadCorriente];

return resultado;

}



PanelSerieParalelo.prototype.getPotenciaDI=function(index){
var r1= this.impedancias[index].r;
var temp=this.getCorrienteDI(index);

temp= this.multiplicador[this.datos_basicos.unidadCorriente]*temp;
r1=this.multiplicador[this.datos_basicos.unidadResistencia]*r1;


var resultado=temp*temp*r1;

resultado= resultado/this.multiplicador[this.datos_basicos.unidadPotencia];

return resultado;
}

PanelSerieParalelo.prototype.getPotenciaDV=function(index){

var r1= this.impedancias[index].r;
var temp=this.getCorrienteDV(index);

temp= this.multiplicador[this.datos_basicos.unidadCorriente]*temp;
r1=this.multiplicador[this.datos_basicos.unidadResistencia]*r1;

var resultado=temp*temp*r1;

resultado= resultado/this.multiplicador[this.datos_basicos.unidadPotencia];

return resultado;
}

PanelSerieParalelo.prototype.getPotenciaTotalDV=function(){

var suma=0;

for (var i=0;i<this.impedancias.length;i++){

var pi=this.getPotenciaDV(i);
suma=suma+pi;

}

return suma;

}

PanelSerieParalelo.prototype.getPotenciaTotalDI=function(){

var suma=0;

for (var i=0;i<this.impedancias.length;i++){

var pi=this.getPotenciaDI(i);
suma=suma+pi;

}

return suma;

}

PanelSerieParalelo.prototype.setImpedancias=function(arrayImpedancias){

this.impedancias = arrayImpedancias;

}


function impedancia(id,r_){
this.id=id;
this.r=r_;
this.p=0;
this.v=0;
this.i=0;


}

PanelSerieParalelo.prototype.leerEnMemoria=function(){



}

PanelSerieParalelo.prototype.guardarEnMemoria=function(){



}
