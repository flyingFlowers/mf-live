import React from 'react';

export default props => (
  <svg
    {...props}
    // viewBox="0 0 125 18.156"
    viewBox="0 0 1975 1024"
    style={{
      fill: '#fff',
      fillRule: 'evenodd',
    }}
  >
    {/* <path
      d="M24.33,18.06H17.91a2.118,2.118,0,0,0-2.37,2.49q0.06,2.49,2.4,2.49H24.6q0.99,
    0,.99.75t-0.99.75H18.36q-2.79,0-2.79,2.97,0,1.02,1.95,2.55l5.19,5.16q2.28,1.8,3.81,
    0t-0.27-3.66l-2.13-2.04h0.51q5.28-.15,5.28-5.73,0-5.73-5.58-5.73h0Zm21.15,2.49a2.279,
    2.279,0,0,0-.735-1.83,2.609,2.609,0,0,0-1.755-.63,2.567,2.567,0,0,0-1.725.63,2.277,
    2.277,0,0,0-.735,1.83v8.31q0,2.22-2.01,2.22t-2.01-2.22V20.55a2.279,2.279,0,0,0-.735-1.83,
    2.609,2.609,0,0,0-1.755-.63,2.567,2.567,0,0,0-1.725.63,2.277,2.277,0,0,0-.735,
    1.83v7.56Q31.56,36,38.4,36h0.21q6.87,0,6.87-7.89V20.55Zm12.81-.9a2.271,2.271,0,0,
    0-1.335-1.47,2.638,2.638,0,0,0-1.875.03,2.7,2.7,0,0,0-1.38,1.2,2.262,2.262,0,0,0-.06,
    1.98l3.21,7.71H54.42l0.3-.66a2.265,2.265,0,0,0-.06-1.98,2.7,2.7,0,0,0-1.38-1.2,2.638,
    2.638,0,0,0-1.875-.03A2.269,2.269,0,0,0,50.07,26.7l-2.7,6a2.262,2.262,0,0,0,.06,1.98,
    2.557,2.557,0,0,0,1.38,1.17,2.694,2.694,0,0,0,1.875.045A2.22,2.22,0,0,0,52.02,34.44l0.39-.87h6.3l0.36,
    0.87A2.218,2.218,0,0,0,60.4,35.9a2.694,2.694,0,0,0,1.875-.045,2.559,2.559,0,0,0,
    1.38-1.17,2.265,2.265,0,0,0,.06-1.98Zm15.72-1.59h-6.42a2.118,2.118,0,0,0-2.37,2.49q0.06,
    2.49,2.4,2.49h6.66q0.99,0,.99.75t-0.99.75h-6.24q-2.79,0-2.79,2.97,0,1.02,1.95,2.55l5.19,
    5.16q2.279,1.8,3.81,0t-0.27-3.66L73.8,29.52h0.51q5.28-.15,5.28-5.73,0-5.73-5.58-5.73h0Zm21.15,
    2.49a2.279,2.279,0,0,0-.735-1.83,2.609,2.609,0,0,0-1.755-.63,2.567,2.567,0,0,0-1.725.63,2.277,
    2.277,0,0,0-.735,1.83v8.31q0,2.22-2.01,2.22t-2.01-2.22V20.55a2.279,2.279,0,0,0-.735-1.83,2.609,
    2.609,0,0,0-1.755-.63,2.567,2.567,0,0,0-1.725.63,2.277,2.277,0,0,0-.735,1.83v7.56q0,7.89,6.84,
    7.89h0.21q6.87,0,6.87-7.89V20.55Zm12.81-.9a2.27,2.27,0,0,0-1.335-1.47,2.638,2.638,0,0,0-1.875.03,
    2.7,2.7,0,0,0-1.38,1.2,2.264,2.264,0,0,0-.06,1.98l3.21,7.71H104.1l0.3-.66a2.264,2.264,0,0,
    0-.06-1.98,2.7,2.7,0,0,0-1.38-1.2,2.638,2.638,0,0,0-1.875-.03,2.271,2.271,0,0,0-1.335,1.47l-2.7,
    6a2.262,2.262,0,0,0,.06,1.98,2.557,2.557,0,0,0,1.38,1.17,2.694,2.694,0,0,0,1.875.045A2.219,2.219,
    0,0,0,101.7,34.44l0.39-.87h6.3l0.36,0.87a2.219,2.219,0,0,0,1.335,1.455,2.694,2.694,0,0,0,1.875-.045,
    2.558,2.558,0,0,0,1.38-1.17,2.263,2.263,0,0,0,.06-1.98Zm8.094,16.258a0.836,0.836,0,0,0,.625.256,
    0.866,0.866,0,0,0,.643-0.256,0.875,0.875,0,0,0,0-1.23,0.913,0.913,0,0,0-1.265,0A0.882,0.882,0,0,
    0,116.063,35.908ZM120.9,36V24.81H119.56V36H120.9Zm2.468-9.635a0.823,0.823,0,0,0,.6.236,0.859,0.859,0,0,
    0,.612-0.236,0.78,0.78,0,0,0,.249-0.591,0.8,0.8,0,0,0-.249-0.6,0.853,0.853,0,0,0-.612-0.239,0.829,0.829,
    0,0,0-.841.841A0.8,0.8,0,0,0,123.367,26.365ZM124.625,36V28.44h-1.34V36h1.34ZM131.7,28.44l-1.934,5.428a4.965,
    4.965,0,0,0-.24,1.06h-0.034a4.819,4.819,0,0,0-.266-1.087l-1.846-5.4h-1.463L128.761,36h1.353l2.994-7.561H131.7Zm8.825,3.445a3.923,
    3.923,0,0,0-.834-2.669,2.916,2.916,0,0,0-2.317-.954,3.224,3.224,0,0,0-2.5,1.128,4.134,4.134,0,0,0-1.009,2.864,4.2,4.2,0,0,0,.92,
    2.885,3.239,3.239,0,0,0,2.56,1.039,4.5,4.5,0,0,0,2.645-.7v-1.2a3.739,3.739,0,0,1-2.331.814,2.313,2.313,0,0,1-1.757-.66,2.722,
    2.722,0,0,1-.663-1.87h5.291V31.885Zm-5.291-.4a2.766,2.766,0,0,1,.735-1.552,1.877,1.877,0,0,1,1.385-.595,1.674,
    1.674,0,0,1,1.346.561,2.4,2.4,0,0,1,.486,1.586h-3.952Z" transform="translate(-15.531 -18.031)"
    /> */}
    <path d="M404.318512 933.975661c-9.032724 0-18.009166-3.612271-24.51637-10.745738-85.3509-93.779873-223.398999-94.683453-226.247884-94.683453l-0.201591 0c-18.008142 0-32.711006-14.258749-32.840966-31.93534-0.144286-17.770735 14.367219-32.251541 32.446993-32.446993 6.818289-0.358157 169.878039-0.192382 275.79944 116.183116 12.085246 13.253862 10.901281 33.601282-2.618641 45.454238C419.905512 931.275155 412.089499 933.975661 404.318512 933.975661L404.318512 933.975661 404.318512 933.975661zM624.369254 933.913239c-7.972579 0-15.980973-2.835581-22.309098-8.598842-13.299911-12.068873-14.117532-32.451086-1.777483-45.483914C709.97905 763.615645 869.722264 763.744581 876.023784 764.003478c18.148335 0.191358 32.68133 14.744819 32.483832 32.513508-0.196475 17.673521-14.832823 31.869848-32.81436 31.869848l-0.258896 0 0 0c-2.726088 0-137.984654 0.873903-227.009224 95.194082C641.990586 930.467767 633.16457 933.913239 624.369254 933.913239L624.369254 933.913239 624.369254 933.913239zM566.520731 770.18527 462.530308 770.18527c-3.310396 0-6.53074-0.48607-9.586332-1.417279-111.00621-13.9712-205.346855-77.166497-266.150686-178.49837-70.585615-117.693516-86.763063-270.190699-40.203654-379.482871 5.018294-11.747555 16.638959-19.504216 29.639041-19.767206l9.875928-0.093121c62.506613 0 120.888278 11.588943 174.018336 34.512025C398.509203 156.580175 442.34764 104.33323 490.688625 69.822229c2.554172-2.188852 5.474688-4.024663 8.723685-5.380544l0 0c10.137895-4.309142 21.922289-3.377934 31.203676 2.545986 1.608637 1.033539 3.120061 2.192945 4.496407 3.476171 48.463782 34.893718 91.092671 86.370113 129.685641 156.674319 54.171784-24.007787 113.898073-36.176944 178.047092-36.176944l10.037611 0.092098c13.006222 0.25992 24.620747 8.009418 29.632901 19.768229 46.571688 109.319801 30.419823 261.815961-40.229237 379.50436-60.802808 101.274568-155.107637 164.508751-266.087241 178.497347C573.08524 769.673617 569.866942 770.18527 566.520731 770.18527L566.520731 770.18527 566.520731 770.18527zM468.37134 705.801914l92.308359 0c0.688685-0.134053 1.401929-0.227174 2.131547-0.320295 118.656447-12.942777 186.713472-87.595011 222.911906-147.886165 55.416124-92.432179 72.219835-213.216079 43.606147-302.131155-59.722196 1.904373-114.456798 16.264429-162.858158 42.794665-7.910157 4.309142-17.264199 5.214768-25.821085 2.632967-8.602935-2.632967-15.72617-8.655124-19.694551-16.607236-33.270754-66.76152-68.946278-115.889427-108.515483-149.370982-39.60502 33.414017-76.061326 82.892919-108.61679 147.46661-3.962242 7.853875-10.988262 13.782911-19.518542 16.415878-8.532327 2.669806-17.71957 1.775436-25.600051-2.409886-47.37703-25.272593-100.827383-39.017642-158.952198-40.886199-28.609595 88.919169-11.811 209.696929 43.60717 302.094316 36.20355 60.291155 104.217596 134.911666 222.847437 147.886165C466.925409 705.57474 467.644793 705.667861 468.37134 705.801914L468.37134 705.801914 468.37134 705.801914zM514.279926 962.02039c-18.116613 0-32.815383-14.391778-32.815383-32.194236L481.464543 737.991034c0-17.801435 14.69877-32.18912 32.815383-32.18912 18.111496 0 32.81436 14.388708 32.81436 32.18912l0 191.83512C547.062564 947.627588 532.391423 962.02039 514.279926 962.02039L514.279926 962.02039 514.279926 962.02039zM514.279926 962.02039" fill="#1296db"></path><path d="M1454.532547 933.975661c-9.032724 0-18.010189-3.612271-24.517393-10.745738-85.349877-93.779873-223.398999-94.683453-226.248907-94.683453l-0.200568 0c-18.009166 0-32.711006-14.258749-32.840966-31.93534-0.144286-17.770735 14.367219-32.251541 32.446993-32.446993 6.818289-0.358157 169.878039-0.192382 275.79944 116.183116 12.085246 13.253862 10.901281 33.601282-2.619664 45.454238C1470.118524 931.275155 1462.302511 933.975661 1454.532547 933.975661L1454.532547 933.975661 1454.532547 933.975661zM1674.582265 933.913239c-7.971555 0-15.97995-2.835581-22.309098-8.598842-13.298887-12.068873-14.116509-32.451086-1.778506-45.483914 109.696378-116.213815 269.441639-116.084878 275.742135-115.825982 18.148335 0.191358 32.68133 14.744819 32.483832 32.513508-0.196475 17.673521-14.8318 31.869848-32.813337 31.869848l-0.258896 0 0 0c-2.727111 0-137.985678 0.873903-227.009224 95.194082C1692.202575 930.467767 1683.377582 933.913239 1674.582265 933.913239L1674.582265 933.913239 1674.582265 933.913239zM1616.733743 770.18527l-103.990422 0c-3.310396 0-6.53074-0.48607-9.586332-1.417279-111.00621-13.9712-205.347878-77.166497-266.150686-178.49837-70.586638-117.693516-86.763063-270.190699-40.202631-379.482871 5.018294-11.747555 16.638959-19.504216 29.638017-19.767206l9.875928-0.093121c62.506613 0 120.888278 11.588943 174.019359 34.512025 38.386262-68.858274 82.225723-121.104195 130.565684-155.61622 2.554172-2.188852 5.475711-4.024663 8.722662-5.380544l0 0c10.138918-4.309142 21.924335-3.377934 31.205723 2.545986 1.607614 1.033539 3.119037 2.192945 4.495384 3.476171 48.463782 34.893718 91.093694 86.370113 129.686664 156.674319 54.17076-24.007787 113.89705-36.176944 178.047092-36.176944l10.036587 0.092098c13.006222 0.25992 24.620747 8.009418 29.632901 19.768229 46.571688 109.319801 30.420847 261.815961-40.228213 379.50436-60.802808 101.274568-155.10866 164.508751-266.088264 178.497347C1623.299275 769.673617 1620.080977 770.18527 1616.733743 770.18527L1616.733743 770.18527 1616.733743 770.18527zM1518.584352 705.801914M1564.491914 962.02039c-18.114566 0-32.81436-14.391778-32.81436-32.194236L1531.677555 737.991034c0-17.801435 14.699794-32.18912 32.81436-32.18912 18.11252 0 32.815383 14.388708 32.815383 32.18912l0 191.83512C1597.276598 947.627588 1582.604434 962.02039 1564.491914 962.02039L1564.491914 962.02039 1564.491914 962.02039zM1564.491914 962.02039" fill="#1296db"></path>
  </svg>
);
