var Client;(()=>{var o={387:()=>{document.getElementById("countriesList").innerHTML='<form><select id="country" name="country">\n<option>Select Country</option>\n<option value="US">United States</option>\n<option value="AF">Afghanistan</option>\n<option value="AX">Aland Islands</option>\n<option value="AL">Albania</option>\n<option value="DZ">Algeria</option>\n<option value="AS">American Samoa</option>\n<option value="AD">Andorra</option>\n<option value="AO">Angola</option>\n<option value="AI">Anguilla</option>\n<option value="AQ">Antarctica</option>\n<option value="AG">Antigua and Barbuda</option>\n<option value="AR">Argentina</option>\n<option value="AM">Armenia</option>\n<option value="AW">Aruba</option>\n<option value="AU">Australia</option>\n<option value="AT">Austria</option>\n<option value="AZ">Azerbaijan</option>\n<option value="BS">Bahamas</option>\n<option value="BH">Bahrain</option>\n<option value="BD">Bangladesh</option>\n<option value="BB">Barbados</option>\n<option value="BY">Belarus</option>\n<option value="BE">Belgium</option>\n<option value="BZ">Belize</option>\n<option value="BJ">Benin</option>\n<option value="BM">Bermuda</option>\n<option value="BT">Bhutan</option>\n<option value="BO">Bolivia</option>\n<option value="BQ">Bonaire, Sint Eustatius and Saba</option>\n<option value="BA">Bosnia and Herzegovina</option>\n<option value="BW">Botswana</option>\n<option value="BV">Bouvet Island</option>\n<option value="BR">Brazil</option>\n<option value="IO">British Indian Ocean Territory</option>\n<option value="BN">Brunei Darussalam</option>\n<option value="BG">Bulgaria</option>\n<option value="BF">Burkina Faso</option>\n<option value="BI">Burundi</option>\n<option value="KH">Cambodia</option>\n<option value="CM">Cameroon</option>\n<option value="CA">Canada</option>\n<option value="CV">Cape Verde</option>\n<option value="KY">Cayman Islands</option>\n<option value="CF">Central African Republic</option>\n<option value="TD">Chad</option>\n<option value="CL">Chile</option>\n<option value="CN">China</option>\n<option value="CX">Christmas Island</option>\n<option value="CC">Cocos (Keeling) Islands</option>\n<option value="CO">Colombia</option>\n<option value="KM">Comoros</option>\n<option value="CG">Congo</option>\n<option value="CD">Congo, Democratic Republic of the Congo</option>\n<option value="CK">Cook Islands</option>\n<option value="CR">Costa Rica</option>\n<option value="CI">Cote D\'Ivoire</option>\n<option value="HR">Croatia</option>\n<option value="CU">Cuba</option>\n<option value="CW">Curacao</option>\n<option value="CY">Cyprus</option>\n<option value="CZ">Czech Republic</option>\n<option value="DK">Denmark</option>\n<option value="DJ">Djibouti</option>\n<option value="DM">Dominica</option>\n<option value="DO">Dominican Republic</option>\n<option value="EC">Ecuador</option>\n<option value="EG">Egypt</option>\n<option value="SV">El Salvador</option>\n<option value="GQ">Equatorial Guinea</option>\n<option value="ER">Eritrea</option>\n<option value="EE">Estonia</option>\n<option value="ET">Ethiopia</option>\n<option value="FK">Falkland Islands (Malvinas)</option>\n<option value="FO">Faroe Islands</option>\n<option value="FJ">Fiji</option>\n<option value="FI">Finland</option>\n<option value="FR">France</option>\n<option value="GF">French Guiana</option>\n<option value="PF">French Polynesia</option>\n<option value="TF">French Southern Territories</option>\n<option value="GA">Gabon</option>\n<option value="GM">Gambia</option>\n<option value="GE">Georgia</option>\n<option value="DE">Germany</option>\n<option value="GH">Ghana</option>\n<option value="GI">Gibraltar</option>\n<option value="GR">Greece</option>\n<option value="GL">Greenland</option>\n<option value="GD">Grenada</option>\n<option value="GP">Guadeloupe</option>\n<option value="GU">Guam</option>\n<option value="GT">Guatemala</option>\n<option value="GG">Guernsey</option>\n<option value="GN">Guinea</option>\n<option value="GW">Guinea-Bissau</option>\n<option value="GY">Guyana</option>\n<option value="HT">Haiti</option>\n<option value="HM">Heard Island and Mcdonald Islands</option>\n<option value="VA">Holy See (Vatican City State)</option>\n<option value="HN">Honduras</option>\n<option value="HK">Hong Kong</option>\n<option value="HU">Hungary</option>\n<option value="IS">Iceland</option>\n<option value="IN">India</option>\n<option value="ID">Indonesia</option>\n<option value="IR">Iran, Islamic Republic of</option>\n<option value="IQ">Iraq</option>\n<option value="IE">Ireland</option>\n<option value="IM">Isle of Man</option>\n<option value="IL">Israel</option>\n<option value="IT">Italy</option>\n<option value="JM">Jamaica</option>\n<option value="JP">Japan</option>\n<option value="JE">Jersey</option>\n<option value="JO">Jordan</option>\n<option value="KZ">Kazakhstan</option>\n<option value="KE">Kenya</option>\n<option value="KI">Kiribati</option>\n<option value="KP">Korea, Democratic People\'s Republic of</option>\n<option value="KR">Korea, Republic of</option>\n<option value="XK">Kosovo</option>\n<option value="KW">Kuwait</option>\n<option value="KG">Kyrgyzstan</option>\n<option value="LA">Lao People\'s Democratic Republic</option>\n<option value="LV">Latvia</option>\n<option value="LB">Lebanon</option>\n<option value="LS">Lesotho</option>\n<option value="LR">Liberia</option>\n<option value="LY">Libyan Arab Jamahiriya</option>\n<option value="LI">Liechtenstein</option>\n<option value="LT">Lithuania</option>\n<option value="LU">Luxembourg</option>\n<option value="MO">Macao</option>\n<option value="MK">Macedonia, the Former Yugoslav Republic of</option>\n<option value="MG">Madagascar</option>\n<option value="MW">Malawi</option>\n<option value="MY">Malaysia</option>\n<option value="MV">Maldives</option>\n<option value="ML">Mali</option>\n<option value="MT">Malta</option>\n<option value="MH">Marshall Islands</option>\n<option value="MQ">Martinique</option>\n<option value="MR">Mauritania</option>\n<option value="MU">Mauritius</option>\n<option value="YT">Mayotte</option>\n<option value="MX">Mexico</option>\n<option value="FM">Micronesia, Federated States of</option>\n<option value="MD">Moldova, Republic of</option>\n<option value="MC">Monaco</option>\n<option value="MN">Mongolia</option>\n<option value="ME">Montenegro</option>\n<option value="MS">Montserrat</option>\n<option value="MA">Morocco</option>\n<option value="MZ">Mozambique</option>\n<option value="MM">Myanmar</option>\n<option value="NA">Namibia</option>\n<option value="NR">Nauru</option>\n<option value="NP">Nepal</option>\n<option value="NL">Netherlands</option>\n<option value="AN">Netherlands Antilles</option>\n<option value="NC">New Caledonia</option>\n<option value="NZ">New Zealand</option>\n<option value="NI">Nicaragua</option>\n<option value="NE">Niger</option>\n<option value="NG">Nigeria</option>\n<option value="NU">Niue</option>\n<option value="NF">Norfolk Island</option>\n<option value="MP">Northern Mariana Islands</option>\n<option value="NO">Norway</option>\n<option value="OM">Oman</option>\n<option value="PK">Pakistan</option>\n<option value="PW">Palau</option>\n<option value="PS">Palestinian Territory, Occupied</option>\n<option value="PA">Panama</option>\n<option value="PG">Papua New Guinea</option>\n<option value="PY">Paraguay</option>\n<option value="PE">Peru</option>\n<option value="PH">Philippines</option>\n<option value="PN">Pitcairn</option>\n<option value="PL">Poland</option>\n<option value="PT">Portugal</option>\n<option value="PR">Puerto Rico</option>\n<option value="QA">Qatar</option>\n<option value="RE">Reunion</option>\n<option value="RO">Romania</option>\n<option value="RU">Russian Federation</option>\n<option value="RW">Rwanda</option>\n<option value="BL">Saint Barthelemy</option>\n<option value="SH">Saint Helena</option>\n<option value="KN">Saint Kitts and Nevis</option>\n<option value="LC">Saint Lucia</option>\n<option value="MF">Saint Martin</option>\n<option value="PM">Saint Pierre and Miquelon</option>\n<option value="VC">Saint Vincent and the Grenadines</option>\n<option value="WS">Samoa</option>\n<option value="SM">San Marino</option>\n<option value="ST">Sao Tome and Principe</option>\n<option value="SA">Saudi Arabia</option>\n<option value="SN">Senegal</option>\n<option value="RS">Serbia</option>\n<option value="CS">Serbia and Montenegro</option>\n<option value="SC">Seychelles</option>\n<option value="SL">Sierra Leone</option>\n<option value="SG">Singapore</option>\n<option value="SX">Sint Maarten</option>\n<option value="SK">Slovakia</option>\n<option value="SI">Slovenia</option>\n<option value="SB">Solomon Islands</option>\n<option value="SO">Somalia</option>\n<option value="ZA">South Africa</option>\n<option value="GS">South Georgia and the South Sandwich Islands</option>\n<option value="SS">South Sudan</option>\n<option value="ES">Spain</option>\n<option value="LK">Sri Lanka</option>\n<option value="SD">Sudan</option>\n<option value="SR">Suriname</option>\n<option value="SJ">Svalbard and Jan Mayen</option>\n<option value="SZ">Swaziland</option>\n<option value="SE">Sweden</option>\n<option value="CH">Switzerland</option>\n<option value="SY">Syrian Arab Republic</option>\n<option value="TW">Taiwan, Province of China</option>\n<option value="TJ">Tajikistan</option>\n<option value="TZ">Tanzania, United Republic of</option>\n<option value="TH">Thailand</option>\n<option value="TL">Timor-Leste</option>\n<option value="TG">Togo</option>\n<option value="TK">Tokelau</option>\n<option value="TO">Tonga</option>\n<option value="TT">Trinidad and Tobago</option>\n<option value="TN">Tunisia</option>\n<option value="TR">Turkey</option>\n<option value="TM">Turkmenistan</option>\n<option value="TC">Turks and Caicos Islands</option>\n<option value="TV">Tuvalu</option>\n<option value="UG">Uganda</option>\n<option value="UA">Ukraine</option>\n<option value="AE">United Arab Emirates</option>\n<option value="GB">United Kingdom</option>\n<option value="US">United States</option>\n<option value="UM">United States Minor Outlying Islands</option>\n<option value="UY">Uruguay</option>\n<option value="UZ">Uzbekistan</option>\n<option value="VU">Vanuatu</option>\n<option value="VE">Venezuela</option>\n<option value="VN">Viet Nam</option>\n<option value="VG">Virgin Islands, British</option>\n<option value="VI">Virgin Islands, U.s.</option>\n<option value="WF">Wallis and Futuna</option>\n<option value="EH">Western Sahara</option>\n<option value="YE">Yemen</option>\n<option value="ZM">Zambia</option>\n<option value="ZW">Zimbabwe</option></select>\n</form>'}},n={};function t(i){var a=n[i];if(void 0!==a)return a.exports;var e=n[i]={exports:{}};return o[i](e,e.exports,t),e.exports}t.d=(o,n)=>{for(var i in n)t.o(n,i)&&!t.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:n[i]})},t.o=(o,n)=>Object.prototype.hasOwnProperty.call(o,n),t.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};var i={};(()=>{"use strict";t.r(i),t.d(i,{performAction:()=>o});t(387);function o(o){const t=document.getElementById("dateField").value,i=[t.slice(-5),t.slice(0,4)].join("-"),u=[t.slice(-5)].join("-");console.log(u);const v=document.getElementById("city").value.trim(),r=document.getElementById("country"),s=r.options[r.selectedIndex].value,c=r.options[r.selectedIndex].text;console.log(c);const d=new Date(i).getTime(),m=Math.round((d-n.getTime())/864e5+1);e("http://api.geonames.org/searchJSON?q=",v,"&maxRows=1&username=icufishmg",u,s).then((function(o){p("/travelinfo",{city:o.geonames[0].name,country:o.geonames[0].countryName,highTemp:o.data[0].max_temp,precip:o.data[0].precip,minTemp:o.data[0].min_temp,travelDate:i,daysCountdown:m}).then(a("key=22010688-d7e3c3ffcac39b9c48e1a3a8d","https://pixabay.com/api/?",v,c)).then(l())}))}document.getElementById("generate").addEventListener("click",o);let n=new Date;n.getMonth(),n.getDate(),n.getFullYear();const a=async(o,n,t,i)=>{const a=await fetch(`${n}${o}&q=${t}&category=places&image_type=photo`);console.log(`${n}${o}&q=${t}&category=places&image_type=photo`);try{const t=await a.json();if(0===t.total){const t=await fetch(`${n}${o}&q=${i}&image_type=photo`),a=await t.json();document.getElementById("cityImage").src=a.hits[0].webformatURL,document.getElementById("cityImage").alt=a.hits[0].tags}else console.log(t.total),document.getElementById("cityImage").src=t.hits[0].webformatURL,document.getElementById("cityImage").alt=t.hits[0].tags}catch(o){console.log(o,"error")}},e=async(o,n,t,i,a)=>{const e=await fetch(`${o}${n}&country=${a}${t}`);console.log(`${o}${n}&country=${a}${t}`);try{const o=await e.json(),n=await fetch(`https://api.weatherbit.io/v2.0/normals?&lat=${o.geonames[0].lat}&lon=${o.geonames[0].lng}&start_day=${i}&end_day=${i}&tp=daily&key=1d235b160c6c4917b499388daca9bc82&units=I`),t=await n.json(),a={...o,...t};return console.log(a),console.log(a.geonames[0].countryName),a}catch(o){console.log("error",o),alert("That location does not exist.")}},p=async(o="",n={})=>{await fetch(o,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})},l=async()=>{const o=await fetch("/projectdata");try{const n=await o.json();console.log(n);document.querySelector(".inputColumn").remove(),document.getElementById("entry").className="holderResponse",document.getElementById("tripTitle").innerHTML=`My Trip To: ${n.slice(-1)[0].city}, ${n.slice(-1)[0].country} `,document.getElementById("travelDate").innerHTML=`Departing On: ${n.slice(-1)[0].travelDate}`,document.getElementById("daysCountdown").innerHTML=`${n.slice(-1)[0].city} is ${n.slice(-1)[0].daysCountdown} days away.`,document.getElementById("typicalWeather").innerHTML="Typical Weather:",document.getElementById("high").innerHTML=`High: ${n.slice(-1)[0].highTemp}°F`,document.getElementById("low").innerHTML=`Low: ${n.slice(-1)[0].minTemp}°F`,document.getElementById("precipitation").innerHTML=`Precipitation: ${n.slice(-1)[0].precip}"`}catch(o){console.log("error",o)}}})(),Client=i})();