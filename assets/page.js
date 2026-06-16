/* İzgenc Yapı — shared page JS */

// Footer "mimari imza" — katmanlı teknik-çizim skyline (blueprint grid + skyline + zemin/accent)
const SKYLINE_SVG = `<svg class="footer-architecture__svg" viewBox="0 0 1440 200" preserveAspectRatio="xMidYMax slice" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g class="footer-architecture__grid" fill="none" vector-effect="non-scaling-stroke"><line x1="0" y1="8" x2="0" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="48" y1="8" x2="48" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="96" y1="8" x2="96" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="144" y1="8" x2="144" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="192" y1="8" x2="192" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="240" y1="8" x2="240" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="288" y1="8" x2="288" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="336" y1="8" x2="336" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="384" y1="8" x2="384" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="432" y1="8" x2="432" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="480" y1="8" x2="480" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="528" y1="8" x2="528" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="576" y1="8" x2="576" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="624" y1="8" x2="624" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="672" y1="8" x2="672" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="720" y1="8" x2="720" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="768" y1="8" x2="768" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="816" y1="8" x2="816" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="864" y1="8" x2="864" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="912" y1="8" x2="912" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="960" y1="8" x2="960" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="1008" y1="8" x2="1008" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="1056" y1="8" x2="1056" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="1104" y1="8" x2="1104" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="1152" y1="8" x2="1152" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="1200" y1="8" x2="1200" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="1248" y1="8" x2="1248" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="1296" y1="8" x2="1296" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="1344" y1="8" x2="1344" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="1392" y1="8" x2="1392" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="1440" y1="8" x2="1440" y2="178" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="0" y1="24" x2="1440" y2="24" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="0" y1="58" x2="1440" y2="58" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="0" y1="92" x2="1440" y2="92" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="0" y1="126" x2="1440" y2="126" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="0" y1="160" x2="1440" y2="160" stroke="rgba(216,205,187,0.06)" stroke-width="1"/><line x1="300" y1="14" x2="300" y2="178" stroke="rgba(216,205,187,0.12)" stroke-width="1"/><line x1="720" y1="14" x2="720" y2="178" stroke="rgba(216,205,187,0.12)" stroke-width="1"/><line x1="1140" y1="14" x2="1140" y2="178" stroke="rgba(216,205,187,0.12)" stroke-width="1"/><line x1="0" y1="178" x2="1440" y2="40" stroke="rgba(216,205,187,0.06)" stroke-width="1"/></g><g class="footer-architecture__skyline footer-architecture__skyline--back" vector-effect="non-scaling-stroke"><rect x="60" y="70" width="120" height="108" fill="rgba(255,255,255,0.06)" stroke="rgba(216,205,187,0.16)" stroke-width="1.1"/><line x1="60" y1="88" x2="180" y2="88" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="60" y1="110" x2="180" y2="110" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="60" y1="132" x2="180" y2="132" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="60" y1="154" x2="180" y2="154" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="57" y1="70" x2="183" y2="70" stroke="rgba(216,205,187,0.16)" stroke-width="1.1"/><rect x="250" y="96" width="92" height="82" fill="rgba(255,255,255,0.06)" stroke="rgba(216,205,187,0.16)" stroke-width="1.1"/><line x1="250" y1="114" x2="342" y2="114" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="250" y1="136" x2="342" y2="136" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="250" y1="158" x2="342" y2="158" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="247" y1="96" x2="345" y2="96" stroke="rgba(216,205,187,0.16)" stroke-width="1.1"/><rect x="470" y="54" width="150" height="124" fill="rgba(255,255,255,0.06)" stroke="rgba(216,205,187,0.16)" stroke-width="1.1"/><line x1="470" y1="72" x2="620" y2="72" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="470" y1="94" x2="620" y2="94" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="470" y1="116" x2="620" y2="116" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="470" y1="138" x2="620" y2="138" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="470" y1="160" x2="620" y2="160" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="467" y1="54" x2="623" y2="54" stroke="rgba(216,205,187,0.16)" stroke-width="1.1"/><rect x="690" y="84" width="104" height="94" fill="rgba(255,255,255,0.06)" stroke="rgba(216,205,187,0.16)" stroke-width="1.1"/><line x1="690" y1="102" x2="794" y2="102" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="690" y1="124" x2="794" y2="124" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="690" y1="146" x2="794" y2="146" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="690" y1="168" x2="794" y2="168" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="687" y1="84" x2="797" y2="84" stroke="rgba(216,205,187,0.16)" stroke-width="1.1"/><rect x="810" y="64" width="130" height="114" fill="rgba(255,255,255,0.06)" stroke="rgba(216,205,187,0.16)" stroke-width="1.1"/><line x1="810" y1="82" x2="940" y2="82" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="810" y1="104" x2="940" y2="104" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="810" y1="126" x2="940" y2="126" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="810" y1="148" x2="940" y2="148" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="807" y1="64" x2="943" y2="64" stroke="rgba(216,205,187,0.16)" stroke-width="1.1"/><rect x="980" y="100" width="96" height="78" fill="rgba(255,255,255,0.06)" stroke="rgba(216,205,187,0.16)" stroke-width="1.1"/><line x1="980" y1="118" x2="1076" y2="118" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="980" y1="140" x2="1076" y2="140" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="980" y1="162" x2="1076" y2="162" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="977" y1="100" x2="1079" y2="100" stroke="rgba(216,205,187,0.16)" stroke-width="1.1"/><rect x="1130" y="48" width="140" height="130" fill="rgba(255,255,255,0.06)" stroke="rgba(216,205,187,0.16)" stroke-width="1.1"/><line x1="1130" y1="66" x2="1270" y2="66" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="1130" y1="88" x2="1270" y2="88" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="1130" y1="110" x2="1270" y2="110" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="1130" y1="132" x2="1270" y2="132" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="1130" y1="154" x2="1270" y2="154" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="1127" y1="48" x2="1273" y2="48" stroke="rgba(216,205,187,0.16)" stroke-width="1.1"/><rect x="1320" y="78" width="150" height="100" fill="rgba(255,255,255,0.06)" stroke="rgba(216,205,187,0.16)" stroke-width="1.1"/><line x1="1320" y1="96" x2="1470" y2="96" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="1320" y1="118" x2="1470" y2="118" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="1320" y1="140" x2="1470" y2="140" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="1320" y1="162" x2="1470" y2="162" stroke="rgba(216,205,187,0.08)" stroke-width="1"/><line x1="1317" y1="78" x2="1473" y2="78" stroke="rgba(216,205,187,0.16)" stroke-width="1.1"/></g><g class="footer-architecture__skyline footer-architecture__skyline--front" vector-effect="non-scaling-stroke"><g class="footer-architecture__building"><rect x="40" y="96" width="86" height="82" fill="rgba(255,255,255,0.06)" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><rect x="38" y="90" width="90" height="6" fill="none" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><line x1="40" y1="123" x2="126" y2="123" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="40" y1="151" x2="126" y2="151" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><rect x="46" y="104" width="36" height="14" fill="none" stroke="rgba(216,205,187,0.18)" stroke-width="1"/><rect x="83" y="132" width="36" height="14" fill="none" stroke="rgba(216,205,187,0.18)" stroke-width="1"/><rect x="46" y="159" width="36" height="14" fill="none" stroke="rgba(216,205,187,0.18)" stroke-width="1"/><g class="footer-architecture__windows"><rect x="46.0" y="106.0" width="22.0" height="18.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="72.0" y="106.0" width="22.0" height="18.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="98.0" y="106.0" width="22.0" height="18.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="46.0" y="129.0" width="22.0" height="18.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="72.0" y="129.0" width="22.0" height="18.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="98.0" y="129.0" width="22.0" height="18.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="46.0" y="152.0" width="22.0" height="18.0" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="72.0" y="152.0" width="22.0" height="18.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="98.0" y="152.0" width="22.0" height="18.0" rx="0.6" fill="rgba(216,205,187,0.18)"/></g></g><g class="footer-architecture__building"><rect x="150" y="58" width="70" height="120" fill="rgba(145, 127, 90,0.10)" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><rect x="148" y="52" width="74" height="6" fill="none" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><line x1="163" y1="64" x2="163" y2="172" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="176" y1="64" x2="176" y2="172" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="189" y1="64" x2="189" y2="172" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="202" y1="64" x2="202" y2="172" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="215" y1="64" x2="215" y2="172" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="150" y1="96" x2="220" y2="96" stroke="rgba(216,205,187,0.17)" stroke-width="1.1"/><line x1="150" y1="135" x2="220" y2="135" stroke="rgba(216,205,187,0.17)" stroke-width="1.1"/><line x1="150" y1="52" x2="150" y2="178" stroke="#C56C43" stroke-width="1.8"/></g><g class="footer-architecture__building"><rect x="236" y="104" width="132" height="74" fill="rgba(255,255,255,0.06)" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><rect x="234" y="98" width="136" height="6" fill="none" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><g class="footer-architecture__windows"><rect x="242.0" y="114.0" width="16.7" height="15.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="262.7" y="114.0" width="16.7" height="15.3" rx="0.6" fill="rgba(145, 127, 90,0.26)"/><rect x="283.3" y="114.0" width="16.7" height="15.3" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="304.0" y="114.0" width="16.7" height="15.3" rx="0.6" fill="rgba(145, 127, 90,0.26)"/><rect x="324.7" y="114.0" width="16.7" height="15.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="345.3" y="114.0" width="16.7" height="15.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="242.0" y="134.3" width="16.7" height="15.3" rx="0.6" fill="rgba(145, 127, 90,0.26)"/><rect x="262.7" y="134.3" width="16.7" height="15.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="283.3" y="134.3" width="16.7" height="15.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="304.0" y="134.3" width="16.7" height="15.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="324.7" y="134.3" width="16.7" height="15.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="345.3" y="134.3" width="16.7" height="15.3" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="242.0" y="154.7" width="16.7" height="15.3" rx="0.6" fill="rgba(145, 127, 90,0.26)"/><rect x="262.7" y="154.7" width="16.7" height="15.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="283.3" y="154.7" width="16.7" height="15.3" rx="0.6" fill="rgba(145, 127, 90,0.26)"/><rect x="304.0" y="154.7" width="16.7" height="15.3" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="324.7" y="154.7" width="16.7" height="15.3" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="345.3" y="154.7" width="16.7" height="15.3" rx="0.6" fill="rgba(145, 127, 90,0.26)"/></g></g><g class="footer-architecture__building"><rect x="392" y="40" width="96" height="138" fill="rgba(145, 127, 90,0.10)" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><rect x="390" y="34" width="100" height="6" fill="none" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><rect x="418" y="14" width="44" height="26" fill="rgba(145, 127, 90,0.10)" stroke="rgba(216,205,187,0.30)" stroke-width="1.2"/><line x1="418" y1="14" x2="462" y2="14" stroke="#CFAE70" stroke-width="1.6"/><g class="footer-architecture__windows"><rect x="398.0" y="50.0" width="18.0" height="20.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="420.0" y="50.0" width="18.0" height="20.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="442.0" y="50.0" width="18.0" height="20.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="464.0" y="50.0" width="18.0" height="20.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="398.0" y="75.0" width="18.0" height="20.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="420.0" y="75.0" width="18.0" height="20.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="442.0" y="75.0" width="18.0" height="20.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="464.0" y="75.0" width="18.0" height="20.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="398.0" y="100.0" width="18.0" height="20.0" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="420.0" y="100.0" width="18.0" height="20.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="442.0" y="100.0" width="18.0" height="20.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="464.0" y="100.0" width="18.0" height="20.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="398.0" y="125.0" width="18.0" height="20.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="420.0" y="125.0" width="18.0" height="20.0" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="442.0" y="125.0" width="18.0" height="20.0" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="464.0" y="125.0" width="18.0" height="20.0" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="398.0" y="150.0" width="18.0" height="20.0" rx="0.6" fill="rgba(145, 127, 90,0.26)"/><rect x="420.0" y="150.0" width="18.0" height="20.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="442.0" y="150.0" width="18.0" height="20.0" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="464.0" y="150.0" width="18.0" height="20.0" rx="0.6" fill="rgba(216,205,187,0.18)"/></g></g><g class="footer-architecture__building"><rect x="512" y="110" width="120" height="68" fill="rgba(255,255,255,0.06)" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><rect x="510" y="104" width="124" height="6" fill="none" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><g class="footer-architecture__windows"><rect x="518.0" y="120.0" width="18.4" height="13.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="540.4" y="120.0" width="18.4" height="13.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="562.8" y="120.0" width="18.4" height="13.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="585.2" y="120.0" width="18.4" height="13.3" rx="0.6" fill="rgba(145, 127, 90,0.26)"/><rect x="607.6" y="120.0" width="18.4" height="13.3" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="518.0" y="138.3" width="18.4" height="13.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="540.4" y="138.3" width="18.4" height="13.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="562.8" y="138.3" width="18.4" height="13.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="585.2" y="138.3" width="18.4" height="13.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="607.6" y="138.3" width="18.4" height="13.3" rx="0.6" fill="rgba(145, 127, 90,0.26)"/><rect x="518.0" y="156.7" width="18.4" height="13.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="540.4" y="156.7" width="18.4" height="13.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="562.8" y="156.7" width="18.4" height="13.3" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="585.2" y="156.7" width="18.4" height="13.3" rx="0.6" fill="rgba(145, 127, 90,0.26)"/><rect x="607.6" y="156.7" width="18.4" height="13.3" rx="0.6" fill="rgba(216,205,187,0.10)"/></g></g><g class="footer-architecture__building"><rect x="656" y="30" width="64" height="148" fill="rgba(145, 127, 90,0.10)" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><rect x="654" y="24" width="68" height="6" fill="none" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><line x1="669" y1="36" x2="669" y2="172" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="682" y1="36" x2="682" y2="172" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="695" y1="36" x2="695" y2="172" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="708" y1="36" x2="708" y2="172" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="656" y1="77" x2="720" y2="77" stroke="rgba(216,205,187,0.17)" stroke-width="1.1"/><line x1="656" y1="125" x2="720" y2="125" stroke="rgba(216,205,187,0.17)" stroke-width="1.1"/></g><g class="footer-architecture__building"><rect x="744" y="92" width="150" height="86" fill="rgba(255,255,255,0.06)" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><rect x="742" y="86" width="154" height="6" fill="none" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><g class="footer-architecture__windows"><rect x="750.0" y="102.0" width="19.7" height="19.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="773.7" y="102.0" width="19.7" height="19.3" rx="0.6" fill="rgba(145, 127, 90,0.26)"/><rect x="797.3" y="102.0" width="19.7" height="19.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="821.0" y="102.0" width="19.7" height="19.3" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="844.7" y="102.0" width="19.7" height="19.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="868.3" y="102.0" width="19.7" height="19.3" rx="0.6" fill="rgba(145, 127, 90,0.26)"/><rect x="750.0" y="126.3" width="19.7" height="19.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="773.7" y="126.3" width="19.7" height="19.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="797.3" y="126.3" width="19.7" height="19.3" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="821.0" y="126.3" width="19.7" height="19.3" rx="0.6" fill="rgba(145, 127, 90,0.26)"/><rect x="844.7" y="126.3" width="19.7" height="19.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="868.3" y="126.3" width="19.7" height="19.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="750.0" y="150.7" width="19.7" height="19.3" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="773.7" y="150.7" width="19.7" height="19.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="797.3" y="150.7" width="19.7" height="19.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="821.0" y="150.7" width="19.7" height="19.3" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="844.7" y="150.7" width="19.7" height="19.3" rx="0.6" fill="rgba(145, 127, 90,0.26)"/><rect x="868.3" y="150.7" width="19.7" height="19.3" rx="0.6" fill="rgba(216,205,187,0.18)"/></g></g><g class="footer-architecture__building"><rect x="916" y="70" width="92" height="108" fill="rgba(255,255,255,0.06)" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><rect x="914" y="64" width="96" height="6" fill="none" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><line x1="916" y1="106" x2="1008" y2="106" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="916" y1="142" x2="1008" y2="142" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><rect x="922" y="81" width="39" height="18" fill="none" stroke="rgba(216,205,187,0.18)" stroke-width="1"/><rect x="962" y="117" width="39" height="18" fill="none" stroke="rgba(216,205,187,0.18)" stroke-width="1"/><rect x="922" y="153" width="39" height="18" fill="none" stroke="rgba(216,205,187,0.18)" stroke-width="1"/><g class="footer-architecture__windows"><rect x="922.0" y="80.0" width="24.0" height="26.7" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="950.0" y="80.0" width="24.0" height="26.7" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="978.0" y="80.0" width="24.0" height="26.7" rx="0.6" fill="rgba(145, 127, 90,0.26)"/><rect x="922.0" y="111.7" width="24.0" height="26.7" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="950.0" y="111.7" width="24.0" height="26.7" rx="0.6" fill="rgba(145, 127, 90,0.26)"/><rect x="978.0" y="111.7" width="24.0" height="26.7" rx="0.6" fill="rgba(145, 127, 90,0.26)"/><rect x="922.0" y="143.3" width="24.0" height="26.7" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="950.0" y="143.3" width="24.0" height="26.7" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="978.0" y="143.3" width="24.0" height="26.7" rx="0.6" fill="rgba(216,205,187,0.18)"/></g></g><g class="footer-architecture__building"><rect x="1028" y="44" width="74" height="134" fill="rgba(145, 127, 90,0.10)" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><rect x="1026" y="38" width="78" height="6" fill="none" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><line x1="1041" y1="50" x2="1041" y2="172" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="1054" y1="50" x2="1054" y2="172" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="1067" y1="50" x2="1067" y2="172" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="1080" y1="50" x2="1080" y2="172" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="1093" y1="50" x2="1093" y2="172" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="1028" y1="87" x2="1102" y2="87" stroke="rgba(216,205,187,0.17)" stroke-width="1.1"/><line x1="1028" y1="130" x2="1102" y2="130" stroke="rgba(216,205,187,0.17)" stroke-width="1.1"/><line x1="1028" y1="38" x2="1028" y2="178" stroke="#CFAE70" stroke-width="1.8"/></g><g class="footer-architecture__building"><rect x="1124" y="100" width="140" height="78" fill="rgba(255,255,255,0.06)" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><rect x="1122" y="94" width="144" height="6" fill="none" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><g class="footer-architecture__windows"><rect x="1130.0" y="110.0" width="18.0" height="16.7" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="1152.0" y="110.0" width="18.0" height="16.7" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="1174.0" y="110.0" width="18.0" height="16.7" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="1196.0" y="110.0" width="18.0" height="16.7" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="1218.0" y="110.0" width="18.0" height="16.7" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="1240.0" y="110.0" width="18.0" height="16.7" rx="0.6" fill="rgba(145, 127, 90,0.26)"/><rect x="1130.0" y="131.7" width="18.0" height="16.7" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="1152.0" y="131.7" width="18.0" height="16.7" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="1174.0" y="131.7" width="18.0" height="16.7" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="1196.0" y="131.7" width="18.0" height="16.7" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="1218.0" y="131.7" width="18.0" height="16.7" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="1240.0" y="131.7" width="18.0" height="16.7" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="1130.0" y="153.3" width="18.0" height="16.7" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="1152.0" y="153.3" width="18.0" height="16.7" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="1174.0" y="153.3" width="18.0" height="16.7" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="1196.0" y="153.3" width="18.0" height="16.7" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="1218.0" y="153.3" width="18.0" height="16.7" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="1240.0" y="153.3" width="18.0" height="16.7" rx="0.6" fill="rgba(145, 127, 90,0.26)"/></g></g><g class="footer-architecture__building"><rect x="1288" y="62" width="88" height="116" fill="rgba(145, 127, 90,0.10)" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><rect x="1286" y="56" width="92" height="6" fill="none" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><rect x="1312" y="36" width="40" height="26" fill="rgba(145, 127, 90,0.10)" stroke="rgba(216,205,187,0.30)" stroke-width="1.2"/><line x1="1312" y1="36" x2="1352" y2="36" stroke="#C56C43" stroke-width="1.6"/><g class="footer-architecture__windows"><rect x="1294.0" y="72.0" width="16.0" height="20.8" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="1314.0" y="72.0" width="16.0" height="20.8" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="1334.0" y="72.0" width="16.0" height="20.8" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="1354.0" y="72.0" width="16.0" height="20.8" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="1294.0" y="97.8" width="16.0" height="20.8" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="1314.0" y="97.8" width="16.0" height="20.8" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="1334.0" y="97.8" width="16.0" height="20.8" rx="0.6" fill="rgba(145, 127, 90,0.26)"/><rect x="1354.0" y="97.8" width="16.0" height="20.8" rx="0.6" fill="rgba(145, 127, 90,0.26)"/><rect x="1294.0" y="123.5" width="16.0" height="20.8" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="1314.0" y="123.5" width="16.0" height="20.8" rx="0.6" fill="rgba(216,205,187,0.10)"/><rect x="1334.0" y="123.5" width="16.0" height="20.8" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="1354.0" y="123.5" width="16.0" height="20.8" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="1294.0" y="149.2" width="16.0" height="20.8" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="1314.0" y="149.2" width="16.0" height="20.8" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="1334.0" y="149.2" width="16.0" height="20.8" rx="0.6" fill="rgba(216,205,187,0.18)"/><rect x="1354.0" y="149.2" width="16.0" height="20.8" rx="0.6" fill="rgba(216,205,187,0.18)"/></g></g><g class="footer-architecture__building"><rect x="1392" y="86" width="60" height="92" fill="rgba(145, 127, 90,0.10)" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><rect x="1390" y="80" width="64" height="6" fill="none" stroke="rgba(216,205,187,0.30)" stroke-width="1.3"/><line x1="1405" y1="92" x2="1405" y2="172" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="1418" y1="92" x2="1418" y2="172" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="1431" y1="92" x2="1431" y2="172" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="1444" y1="92" x2="1444" y2="172" stroke="rgba(216,205,187,0.17)" stroke-width="1"/><line x1="1392" y1="115" x2="1452" y2="115" stroke="rgba(216,205,187,0.17)" stroke-width="1.1"/><line x1="1392" y1="145" x2="1452" y2="145" stroke="rgba(216,205,187,0.17)" stroke-width="1.1"/></g><line class="pb-ant" x1="185" y1="58" x2="185" y2="42" stroke="#CFAE70" stroke-width="1.2"/><circle cx="185" cy="41" r="1.7" fill="#C56C43"/><line class="pb-ant" x1="688" y1="30" x2="688" y2="14" stroke="#CFAE70" stroke-width="1.2"/><circle cx="688" cy="13" r="1.7" fill="#C56C43"/><line class="pb-ant" x1="1065" y1="44" x2="1065" y2="28" stroke="#CFAE70" stroke-width="1.2"/><circle cx="1065" cy="27" r="1.7" fill="#C56C43"/><rect class="pb-roofbox" x="262" y="97" width="29" height="7" fill="rgba(145, 127, 90,0.10)" stroke="rgba(216,205,187,0.30)" stroke-width="1"/><rect class="pb-roofbox" x="536" y="103" width="26" height="7" fill="rgba(145, 127, 90,0.10)" stroke="rgba(216,205,187,0.30)" stroke-width="1"/><rect class="pb-roofbox" x="774" y="85" width="33" height="7" fill="rgba(145, 127, 90,0.10)" stroke="rgba(216,205,187,0.30)" stroke-width="1"/><rect class="pb-roofbox" x="1152" y="93" width="30" height="7" fill="rgba(145, 127, 90,0.10)" stroke="rgba(216,205,187,0.30)" stroke-width="1"/></g><g class="footer-architecture__ground" vector-effect="non-scaling-stroke"><line x1="0" y1="178" x2="1440" y2="178" stroke="rgba(216,205,187,0.34)" stroke-width="1.4"/><line x1="40" y1="187" x2="640" y2="187" stroke="rgba(216,205,187,0.17)" stroke-width="1.1" stroke-dasharray="2 6"/><line x1="40" y1="183" x2="40" y2="191" stroke="rgba(216,205,187,0.17)" stroke-width="1.1"/><line x1="640" y1="183" x2="640" y2="191" stroke="rgba(216,205,187,0.17)" stroke-width="1.1"/><line x1="0" y1="182" x2="1440" y2="182" stroke="rgba(216,205,187,0.10)" stroke-width="1"/></g><g class="footer-architecture__accent" vector-effect="non-scaling-stroke"><line x1="40" y1="178" x2="300" y2="178" stroke="#C56C43" stroke-width="2"/><line x1="1140" y1="178" x2="1392" y2="178" stroke="#CFAE70" stroke-width="1.6"/></g></svg>`;

// İnşaat makinesi silüetleri (hero alt bandı için)
const MACHINE_SVGS = [
  // Ekskavatör / kepçe
  '<svg viewBox="0 0 150 50" aria-hidden="true"><rect x="8" y="40" width="74" height="9" rx="4.5"/><rect x="24" y="24" width="42" height="16" rx="2"/><rect x="28" y="13" width="22" height="12" rx="2"/><path d="M62 28 L96 14 L104 20 L72 36 Z"/><path d="M100 12 L120 16 L113 31 L96 25 Z"/></svg>',
  // Damperli kamyon
  '<svg viewBox="0 0 160 50" aria-hidden="true"><path d="M8 20 L78 20 L78 40 L8 40 Z"/><path d="M78 26 L96 26 L108 38 L108 40 L78 40 Z"/><circle cx="30" cy="43" r="6.5"/><circle cx="92" cy="43" r="6.5"/></svg>',
  // Vinç
  '<svg viewBox="0 0 140 50" aria-hidden="true"><rect x="44" y="40" width="56" height="9" rx="3"/><rect x="62" y="8" width="8" height="32"/><path d="M66 8 L128 8 L66 15 Z"/><rect x="120" y="12" width="2.4" height="14"/><rect x="115" y="26" width="12" height="7"/></svg>',
];

// Inject site header
function renderHeader(activePage = "") {
  const items = [
    { href: "anasayfa.html", label: "Ana Sayfa", id: "home" },
    { href: "hakkimizda.html", label: "Hakkımızda", id: "about" },
    { href: "hizmetler.html", label: "Hizmetler", id: "services" },
    { href: "projeler.html", label: "Projeler", id: "projects" },
    { href: "haberler.html", label: "Haberler", id: "news" },
    { href: "kariyer.html", label: "Kariyer", id: "career" },
    { href: "iletisim.html", label: "İletişim", id: "contact" },
  ];
  return `
  <header class="site-header" id="site-header">
    <div class="container row">
      <a href="anasayfa.html" class="brand" aria-label="İzgenç Yapı Anasayfa">
        <img src="../assets/logo.png" alt="İzgenç Yapı" class="brand-logo" onerror="this.style.display='none';this.nextElementSibling.style.display='inline-flex';">
        <span class="brand-fallback" style="display:none; align-items:center; gap:12px;">
          <svg class="brand-mark" viewBox="0 0 28 28" width="28" height="28" aria-hidden="true">
            <rect x="0" y="0" width="16" height="16" style="fill: var(--c-accent);"></rect>
            <rect x="12" y="12" width="16" height="16" style="fill: var(--c-ink);"></rect>
          </svg>
          <span class="brand-name">İzgenç</span><span class="brand-divider"></span><span class="brand-sub">Yapı</span>
        </span>
      </a>
      <nav class="nav" aria-label="Ana navigasyon">
        ${items.map(i => `<a href="${i.href}" class="${i.id===activePage?'active':''}">${i.label}</a>`).join("")}
      </nav>
      <div class="header-cta">
        <a href="iletisim.html" class="btn btn-primary btn-sm">Teklif Al<span class="arr">→</span></a>
        <button class="menu-toggle" aria-label="Menüyü aç" aria-controls="mobile-menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 7h16M4 12h16M4 17h16"/>
          </svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Tam ekran mobil menü (header dışında — backdrop-filter fixed'i hapsetmesin) -->
  <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
      <div class="mm-top">
        <button class="mm-close" aria-label="Menüyü kapat">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
            <path d="M6 6l12 12M18 6L6 18"/>
          </svg>
        </button>
      </div>
      <nav class="mm-nav" aria-label="Mobil navigasyon">
        ${items.map((i, idx) => `<a href="${i.href}" class="${i.id===activePage?'active':''}"><span class="mm-no">${String(idx+1).padStart(2,'0')}</span><span class="mm-label">${i.label}</span><span class="mm-arr" aria-hidden="true">→</span></a>`).join("")}
      </nav>
      <div class="mm-foot">
        <div class="mm-actions">
          <a href="iletisim.html" class="btn btn-primary btn-lg">Teklif Al <span class="arr">→</span></a>
        </div>
        <img src="../assets/logo-transparent.png" alt="" aria-hidden="true" class="mm-logo">
      </div>
    </div>`;
}

// Inject site footer
function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-cta">
        <div class="footer-cta-skyline" aria-hidden="true">${SKYLINE_SVG}</div>
        <div class="footer-cta-left">
          <div class="footer-cta-eyebrow">Birlikte değerlendirelim</div>
          <h2 class="footer-cta-title">Geleceğinizi güvenle <em>birlikte</em> inşa edelim.</h2>
        </div>
        <div class="footer-cta-actions">
          <a href="iletisim.html" class="footer-cta-btn primary">Randevu Al<span class="arr">→</span></a>
        </div>
      </div>

      <div class="footer-mid">
        <div class="footer-brand-col">
          <div class="footer-brand">
            <img src="../assets/logo-light.png" alt="İzgenç Yapı" class="footer-logo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
            <div class="footer-brand-fallback" style="display:none; align-items:flex-start; gap:14px;">
              <svg viewBox="0 0 28 28" width="32" height="32" aria-hidden="true">
                <rect x="0" y="0" width="16" height="16" style="fill: var(--c-accent);"></rect>
                <rect x="12" y="12" width="16" height="16" style="fill: #FFFDF8; opacity: 0.9;"></rect>
              </svg>
              <div class="footer-brand-text">
                <div class="fb-name">İzgenç <em>Yapı</em></div>
                <div class="fb-tagline">EST. 1993 · İZMİR</div>
              </div>
            </div>
          </div>
          <p class="footer-tagline">Geleceğinizi güvenle birlikte inşa ediyoruz.</p>
        </div>

        <div class="footer-col">
          <h5>Keşfedin</h5>
          <ul>
            <li><a href="hakkimizda.html">Hakkımızda</a></li>
            <li><a href="projeler.html">Projeler</a></li>
            <li><a href="hizmetler.html">Hizmetler</a></li>
            <li><a href="haberler.html">Haberler</a></li>
            <li><a href="kariyer.html">Kariyer</a></li>
          </ul>
        </div>
        <div class="footer-col footer-col-services">
          <h5>Hizmetler</h5>
          <ul>
            <li><a href="hizmetler-kat-karsiligi.html">Kat Karşılığı İnşaat</a></li>
            <li><a href="hizmetler-kentsel-donusum.html">Kentsel Dönüşüm</a></li>
            <li><a href="hizmetler-mimari.html">Mimari Hizmetler</a></li>
          </ul>
        </div>
        <div class="footer-col footer-col-contact">
          <h5>İletişim</h5>
          <address>
            Adatepe Mah. 1250 A Grubu<br>
            Küme Evleri No:1/1<br>
            Buca / İzmir
          </address>
          <ul class="contact-links">
            <li><a href="tel:+905359762022">+90 535 976 20 22</a></li>
            <li><a href="mailto:info@izgenc.com">info@izgenc.com</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bot">
        <div class="footer-bot-left">
          <span>© 2026 İZGENÇ YAPI A.Ş.</span>
          <span class="dot">·</span>
          <span>BUCA / İZMİR</span>
        </div>
        <div class="footer-bot-right">
          <a href="hukuki.html#kvkk">KVKK</a>
          <a href="hukuki.html#cerez">Çerez Politikası</a>
          <a href="hukuki.html#gizlilik">Gizlilik</a>
        </div>
      </div>
    </div>
  </footer>`;
}

// Footer skyline: birkaç pencere "alacakaranlıkta yanan ışık" gibi yavaş parlar;
// zamanla ışıklar rastgele yer değiştirir (bir pencere söner, başka yerde yenisi yanar).
function initFooterWindows() {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const wins = Array.prototype.slice.call(
    document.querySelectorAll(".footer-architecture__windows rect")
  );
  if (!wins.length) return;

  const lit = new Set();
  const rnd = (a, b) => a + Math.random() * (b - a);

  function activate(el, maxDelay) {
    el.style.setProperty("--gdelay", rnd(0, maxDelay).toFixed(2) + "s");
    el.style.setProperty("--gd", rnd(5.5, 9).toFixed(2) + "s");
    el.classList.add("is-lit");
    lit.add(el);
  }
  function deactivate(el) {
    el.classList.remove("is-lit");
    lit.delete(el);
  }

  // başlangıç kümesi (~%20), senkron olmaması için geniş gecikme dağılımı
  for (let i = wins.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = wins[i]; wins[i] = wins[j]; wins[j] = t;
  }
  const target = Math.max(12, Math.min(24, Math.round(wins.length * 0.20)));
  for (let i = 0; i < target; i++) activate(wins[i], 7);

  // periyodik rastgele yer değiştirme: bir ışık söner, sönük bir pencere yanar
  function swap() {
    if (!document.hidden) {
      const litArr = Array.from(lit);
      const dark = wins.filter((w) => !lit.has(w));
      if (litArr.length && dark.length) {
        deactivate(litArr[(Math.random() * litArr.length) | 0]);
        activate(dark[(Math.random() * dark.length) | 0], 1.5);
      }
    }
    setTimeout(swap, rnd(2400, 4800)); // organik, sabit olmayan aralık
  }
  setTimeout(swap, rnd(2400, 4800));
}

// Inject mobile sticky CTA
function renderMobileSticky() {
  return `
  <div class="mobile-sticky">
    <a href="iletisim.html" class="btn btn-outline">Bilgi Al</a>
    <a href="tel:+905359762022" class="btn btn-primary">Hemen Ara<span class="arr">→</span></a>
  </div>`;
}

function mount(active = "") {
  // Insert header before <main>
  const main = document.querySelector("main") || document.body.firstElementChild;
  const headerHTML = renderHeader(active);
  main.insertAdjacentHTML("beforebegin", headerHTML);
  // Footer
  document.body.insertAdjacentHTML("beforeend", renderFooter());
  initFooterWindows();
  // Mobile sticky
  document.body.insertAdjacentHTML("beforeend", renderMobileSticky());

  // Scroll behavior on header + mobile sticky CTA
  const header = document.getElementById("site-header");
  const mobileSticky = document.querySelector(".mobile-sticky");
  let lastScrollY = 0;
  const onScroll = () => {
    const sy = window.scrollY;
    if (sy > 12) header.classList.add("scrolled");
    else header.classList.remove("scrolled");

    // Show mobile sticky only after scrolling past 500px AND scrolling down,
    // hide near the footer
    if (mobileSticky) {
      const footer = document.querySelector(".site-footer");
      const nearFooter = footer && (footer.getBoundingClientRect().top < window.innerHeight + 80);
      const scrolledEnough = sy > 480;
      const goingDown = sy >= lastScrollY - 5;
      if (scrolledEnough && goingDown && !nearFooter) {
        mobileSticky.classList.add("visible");
      } else if (!scrolledEnough || nearFooter) {
        mobileSticky.classList.remove("visible");
      }
    }
    lastScrollY = sy;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Tam ekran mobil menü aç/kapat
  const menuToggle = header.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuToggle && mobileMenu) {
    menuToggle.setAttribute("aria-expanded", "false");
    const openMenu = () => {
      document.body.classList.add("nav-open");
      mobileMenu.setAttribute("aria-hidden", "false");
      menuToggle.setAttribute("aria-expanded", "true");
      menuToggle.setAttribute("aria-label", "Menüyü kapat");
      document.documentElement.style.overflow = "hidden";   // arka plan scroll kilidi
    };
    const closeMenu = () => {
      document.body.classList.remove("nav-open");
      mobileMenu.setAttribute("aria-hidden", "true");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Menüyü aç");
      document.documentElement.style.overflow = "";
    };
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      document.body.classList.contains("nav-open") ? closeMenu() : openMenu();
    });
    mobileMenu.querySelector(".mm-close").addEventListener("click", closeMenu);
    mobileMenu.querySelectorAll(".mm-nav a").forEach((a) => a.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && document.body.classList.contains("nav-open")) closeMenu(); });
  }

  // Hero slider + çalışan makine bandı
  initHeroSlider();

  // Reveal on scroll — only hide items below the fold so above-the-fold never blank
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const vh = window.innerHeight;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Only hide initially if clearly below the fold
      if (rect.top > vh - 60) {
        el.classList.add("reveal-pending");
        io.observe(el);
      }
    });
  }

  // Count-up
  document.querySelectorAll("[data-count]").forEach((el) => {
    const target = parseFloat(el.dataset.count);
    const dur = 1400;
    let start = null;
    const initialDisplay = el.textContent;
    let visible = false;
    const tick = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(target * eased);
      el.textContent = val.toLocaleString("tr-TR");
      if (p < 1) requestAnimationFrame(tick);
    };
    const startCount = () => {
      if (visible) return;
      visible = true;
      requestAnimationFrame(tick);
    };
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            startCount();
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.4 });
      io.observe(el);
    } else { startCount(); }
  });

  // Intercept anchor clicks so parent viewer can sync nav between desktop+mobile frames
  document.addEventListener("click", (ev) => {
    const a = ev.target.closest("a[href]");
    if (!a) return;
    const href = a.getAttribute("href");
    if (!href) return;
    if (href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) return;
    if (a.target === "_blank") return;
    if (window.parent && window.parent !== window) {
      ev.preventDefault();
      window.parent.postMessage({ type: "izgenc:navigate", href }, "*");
    }
  });

  // Receive tweaks from parent viewer
  window.addEventListener("message", (ev) => {
    const d = ev.data;
    if (!d || typeof d !== "object") return;
    if (d.type === "izgenc:tweaks") applyTweaks(d.tweaks || {});
  });

  // Apply any tweaks already stored in URL hash
  try {
    if (location.hash.startsWith("#tweaks=")) {
      const t = JSON.parse(decodeURIComponent(location.hash.slice(8)));
      applyTweaks(t);
    }
  } catch(e) {}

  // Smooth scroll for in-page tab clicks
  document.querySelectorAll("[data-scroll-to]").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.querySelector(btn.dataset.scrollTo);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Filter chips (Projects page)
  document.querySelectorAll(".filter-group").forEach(group => {
    const chips = group.querySelectorAll(".chip");
    chips.forEach(c => c.addEventListener("click", () => {
      chips.forEach(o => o.classList.remove("active"));
      c.classList.add("active");
      const filter = c.dataset.filter;
      const grid = document.querySelector(".projects-grid[data-filterable]");
      if (!grid) return;
      grid.querySelectorAll(".project").forEach(p => {
        if (!filter || filter === "all") { p.style.display = ""; return; }
        p.style.display = (p.dataset.status === filter || p.dataset.type === filter) ? "" : "none";
      });
    }));
  });

  // Mutually exclusive FAQ accordions
  const faqs = document.querySelectorAll(".faq details");
  faqs.forEach(detail => {
    detail.addEventListener("toggle", () => {
      if (detail.open) {
        faqs.forEach(other => {
          if (other !== detail && other.open) {
            other.open = false;
          }
        });
      }
    });
  });
}

// Hero slider (ileri/geri oklar, noktalar, otomatik geçiş) + makine bandı
function initHeroSlider() {
  const slider = document.querySelector("[data-hero-slider]");
  if (!slider) return;

  // Çalışan kepçe/kamyon bandını doldur (kusursuz döngü için iki kopya)
  const track = slider.querySelector(".hero-machines-track");
  if (track && !track.children.length) {
    const set = MACHINE_SVGS.concat(MACHINE_SVGS).join("");
    track.innerHTML = set + set;
  }

  const slides = Array.from(slider.querySelectorAll(".hero-slide"));
  if (slides.length <= 1) return;

  let idx = Math.max(0, slides.findIndex(s => s.classList.contains("is-active")));
  const dotsWrap = slider.querySelector(".hero-dots");
  const dots = [];
  if (dotsWrap) {
    dotsWrap.innerHTML = "";
    slides.forEach((_, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", (i + 1) + ". görsel");
      if (i === idx) b.classList.add("active");
      b.addEventListener("click", () => go(i, true));
      dotsWrap.appendChild(b);
      dots.push(b);
    });
  }

  function go(n, user) {
    idx = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("is-active", i === idx));
    dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    if (user) restart();
  }

  const prev = slider.querySelector(".hero-nav.prev");
  const next = slider.querySelector(".hero-nav.next");
  if (prev) prev.addEventListener("click", () => go(idx - 1, true));
  if (next) next.addEventListener("click", () => go(idx + 1, true));

  let touchStartX = 0;
  let touchEndX = 0;
  slider.addEventListener("touchstart", e => {
    touchStartX = e.changedTouches[0].screenX;
  }, {passive: true});
  slider.addEventListener("touchend", e => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 40) go(idx + 1, true); // Sola kaydırma (sonraki)
    if (touchEndX - touchStartX > 40) go(idx - 1, true); // Sağa kaydırma (önceki)
  }, {passive: true});

  let timer = null;
  const start = () => { timer = setInterval(() => go(idx + 1, false), 6000); };
  const restart = () => { if (timer) clearInterval(timer); start(); };
  start();
}

// Apply tweaks (color, font, hero variant, card variant) to current page
function applyTweaks(t) {
  const root = document.documentElement;
  if (t.accent) root.style.setProperty("--c-accent", t.accent);
  if (t.accentHover) root.style.setProperty("--c-accent-hover", t.accentHover);
  if (t.accent2) root.style.setProperty("--c-accent-2", t.accent2);
  if (t.accentBg) root.style.setProperty("--c-accent-bg", t.accentBg);
  if (t.ink) root.style.setProperty("--c-ink", t.ink);
  if (t.bg) root.style.setProperty("--c-bg", t.bg);
  if (t.card) root.style.setProperty("--c-card", t.card);
  if (t.serif) root.style.setProperty("--font-serif", t.serif);
  if (t.sans) root.style.setProperty("--font-sans", t.sans);

  if (t.heroVariant) {
    const h = document.querySelector(".hero");
    if (h) h.dataset.variant = t.heroVariant;
  }
  if (t.cardVariant) {
    document.querySelectorAll(".projects-grid").forEach(g => {
      if (g.dataset.card !== undefined) g.dataset.card = t.cardVariant;
    });
  }
  if (typeof t.density === "string") {
    if (t.density === "cozy")     root.style.setProperty("--pad-section", "80px");
    else if (t.density === "spacious") root.style.setProperty("--pad-section", "144px");
    else root.style.setProperty("--pad-section", "112px");
  }
}

window.IzgencMount = mount;
