(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
var wt=$('wp-t');if(wt){var wa=$('wp-a'),ww=$('wp-w');on([wt,wa,ww],function(){var t=parseFloat(wt.value);if(isNaN(t)){$('wp-o').innerHTML='<strong>Enter a temperature</strong>';return;}var adj=wa.value==='still'?-6:wa.value==='active'?6:0,e=t+adj,lv,d;
 if(e>=10){lv='Light shell or fleece';d='A windproof layer is enough; add a fleece if you stop for long.';}else if(e>=0){lv='Light insulated jacket';d='About 80&ndash;150 g of fill, or a light down jacket around 600 fill.';}else if(e>=-10){lv='Mid-weight puffer or parka';d='Roughly 150&ndash;250 g of down at 600&ndash;700 fill, ideally covering the hips.';}else{lv='Expedition-weight down';d='Heavy box-baffled down, a full hood and a long cut.';}
 $('wp-o').innerHTML='<strong>'+lv+'</strong><p>'+d+'</p><p>'+(ww.value==='1'?'Often wet: choose synthetic fill, or down with a waterproof shell over it.':'Mostly dry: down gives the most warmth for its weight.')+'</p>';});}
var jc=$('js-c');if(jc){var jl=$('js-l'),jf=$('js-f');var Z=[[90,'XS'],[96,'S'],[102,'M'],[108,'L'],[116,'XL'],[124,'XXL']];on([jc,jl,jf],function(){var c=parseFloat(jc.value)||0;if(c<70||c>150){$('js-o').innerHTML='<strong>Enter a chest size</strong><p>Between 70 and 150 cm.</p>';return;}var e=c+parseFloat(jl.value)+(jf.value==='relax'?4:jf.value==='slim'?-2:0),s='XXL+';for(var i=0;i<Z.length;i++){if(e<=Z[i][0]){s=Z[i][1];break;}}
 $('js-o').innerHTML='<strong>Try size '+s+'</strong><p>Your chest plus layers comes to about '+Math.round(e)+' cm of room needed.</p><p>Check the maker&rsquo;s chart and try the &ldquo;hug yourself&rdquo; test.</p>';});}
var lc=$('lb-c');if(lc){var bx=[].slice.call(lc.querySelectorAll('input'));on(bx,function(){var o={};bx.forEach(function(b){o[b.value]=b.checked;});var L=[];L.push(o.active?'Base: thin merino or synthetic top that wicks sweat':'Base: soft long-sleeve top, merino if very cold');if(o.cold||o.snow)L.push(o.active?'Mid: light fleece or grid fleece':'Mid: warm fleece or knit jumper');if(o.cold||o.snow)L.push(o.active?'Insulation: light synthetic jacket, packed for stops':'Insulation: down or synthetic puffer');L.push(o.rain||o.snow?'Shell: waterproof, breathable jacket with a hood':o.wind?'Shell: windproof jacket':'Shell: optional in calm, dry weather');
 $('lb-o').innerHTML='<strong>'+L.length+' layers</strong><ol><li>'+L.join('</li><li>')+'</li></ol>'+(o.snow?'<p>Add a hat and gloves: you lose a lot of heat from extremities.</p>':'');});}
})();
