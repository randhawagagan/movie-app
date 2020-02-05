import React from "react";
import logo from '../disney.svg';
import '../App.css'
const Header = (props) => {
  return (
    <header className="App-header" onClick={props.onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64px" height="64px"><linearGradient id="cCxEPjHQOirCFKwqQ4Qsea" x1="34.5" x2="34.5" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qsea)" d="M18.378,37c-0.303,0.006-0.395-0.088-0.376-0.448c0.046-0.856-0.042-1.291,0.154-2.121 c0.075-0.318,0.222-0.43,0.519-0.43c7.971,0.018,28.945,0,28.945,0c0.435,0.005,0.745,0.343,0.963,0.875 c0.094,0.228,0.258,0.196,0.401,0.048c0.161-0.166,0.347-0.536,0.502-0.712c0.254-0.291,0.498-0.249,0.74,0.021 c0.169,0.189,0.306,0.405,0.378,0.664c0.155,0.558,0.089,0.999,0.291,1.534c0.188,0.499,0.147,0.562-0.311,0.568 C50.584,37,20.123,36.97,18.378,37z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qseb" x1="31.5" x2="31.5" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qseb)" d="M18.905,33c-0.589,0-0.594-0.031-0.603-0.735c-0.009-0.685-0.086-1.36-0.273-2.009 c-0.069-0.244-0.015-0.255,0.189-0.255h5.018c0.52,0.007,0.56,0.106,0.306,0.655c-0.039,0.084-0.078,0.166-0.105,0.255 c-0.095,0.316-0.139,0.655,0.141,0.853c0.271,0.192,0.454-0.093,0.619-0.292c0.266-0.322,0.451-0.715,0.612-1.117 c0.108-0.267,0.247-0.355,0.5-0.355h18.254c0.437,0.022,0.682,0.331,0.804,0.796c0.156,0.589,0.319,1.178,0.567,1.727 c0.152,0.334,0.027,0.472-0.23,0.475H18.905V33z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qsec" x1="34" x2="34" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qsec)" d="M33,21.375c0.031-0.262,0.196-0.379,0.483-0.375c1.249,0.02,4.756,0.016,6.006,0.001 c0.274-0.003,0.385,0.08,0.459,0.349c0.127,0.464-0.024,2.52,0,3.419c0.008,0.297-0.204,0.222-0.349,0.222H29.534 c-0.392-0.007-0.786-0.041-1.174-0.098c-0.382-0.057-0.449-0.249-0.254-0.585c0.077-0.132,0.178-0.275,0.186-0.419 c0.482-1.087,0.751-1.277,1.017-2.294c0.068-0.261,0.236-0.58,0.534-0.593c0.315-0.015,0.502,0.275,0.625,0.555 C30.875,22.5,31,22.75,31.217,23.644c0.019,0.204,0.114,0.342,0.485,0.345C32.051,24.002,33,24.054,33,23.723 C33,23.064,33,21.875,33,21.375z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qsed" x1="34" x2="34" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qsed)" d="M28.7,29c-0.718-0.004-0.745-0.162-0.674-1.03c0.074-0.898,0.143-0.694,0.11-1.599 c-0.011-0.295,0.069-0.372,0.311-0.37h10.426c0.734,0.018,0.728,0.096,0.931,0.94c0.203,0.835,0.176,1.392,0.176,1.392 s0.14,0.646-0.358,0.667H28.7z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qsee" x1="36.5" x2="36.5" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qsee)" d="M38.698,16.005c0.442,0,0.696,0.171,0.68,0.652c-0.013,0.412,0.19,0.764,0.392,1.112 c0.304,0.522,0.34,1.032-0.095,1.512c-0.202,0.222-0.451,0.679-1.495,0.705c-1.314,0.033-2.627,0.004-3.941-0.072 c-0.428-0.025-0.753-0.05-1.107-0.802c-0.206-0.438-0.189-0.861,0.179-1.238c0.288-0.296,0.304-0.685,0.315-1.071 c0.018-0.61,0.153-0.767,0.776-0.789C35.127,15.989,38.698,16.005,38.698,16.005z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qsef" x1="36.5" x2="36.5" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qsef)" d="M33,14.902c1.23-1.96,2.434-3.912,3.529-5.902c0.214,0.049,0.239,0.169,0.295,0.263 c0.97,1.625,1.95,3.248,2.901,4.881c0.465,0.8,0.41,0.851-0.71,0.856h-4.919C33.748,14.999,33.403,14.981,33,14.902z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qseg" x1="21.5" x2="21.5" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qseg)" d="M21.47,29c-0.732-0.007-1.462-0.004-2.192-0.076c-0.28-0.027-0.33-0.123-0.233-0.372 c0.412-1.056,0.873-2.088,1.439-3.067c0.353-0.612,1.245-0.645,1.734-0.095c0.272,0.307,0.452,0.675,0.637,1.037 c0.335,0.657,0.683,1.309,1.003,1.974c0.23,0.477,0.213,0.476-0.287,0.533C22.872,29.013,22.171,28.991,21.47,29z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qseh" x1="14.5" x2="14.5" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qseh)" d="M14.591,37c-0.469-0.011-0.903-0.001-1.335-0.089c-0.25-0.051-0.295-0.171-0.229-0.381 c0.228-0.737,0.466-1.471,0.796-2.167c0.21-0.444,0.757-0.494,1.018-0.08c0.463,0.737,0.816,1.531,1.129,2.344 c0.082,0.216-0.021,0.266-0.199,0.303C15.368,37.012,14.96,36.977,14.591,37z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qsei" x1="25.999" x2="25.999" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qsei)" d="M25.966,28.993c-1.055,0.027-1.055,0.027-0.879-1.133c0.13-0.856,0.274-1.708,0.49-2.543 c0.034-0.129,0.058-0.323,0.21-0.317c0.122,0.004,0.134,0.187,0.176,0.3c0.384,1.023,0.689,2.075,0.989,3.131 c0.116,0.412,0.014,0.567-0.348,0.563C26.394,28.992,26.18,28.993,25.966,28.993z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qsej" x1="47.5" x2="47.5" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qsej)" d="M48.937,32.488c-0.051-0.196-0.105-0.394-0.174-0.586c-0.087-0.238-0.937-2.98-1.066-3.616 c-0.022-0.11-0.018-0.266-0.124-0.284c-0.132-0.021-0.168,0.146-0.21,0.26c-0.166,0.465-1.207,3.878-1.345,4.403 c-0.048,0.186,0,0.259,0.222,0.28c0.438,0.041,0.874,0.068,1.314,0.049c0.315,0,0.631,0.015,0.945-0.004 C49.054,32.958,49.057,32.948,48.937,32.488z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qsek" x1="42.5" x2="42.5" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qsek)" d="M43.915,27.497c-0.092-0.261-0.27-0.789-0.272-0.789c-0.001-0.003-0.004-0.009-0.006-0.011 C43.6,26.585,42.65,24.192,42.5,24c-0.041,0.117-1.425,3.242-1.446,3.311C40.973,27.47,41,27.634,41.03,27.796 c0.213,1.162,0.276,1.207,1.641,1.204c0.224,0,0.449,0,0.672,0c0.323-0.001,0.522-0.092,0.588-0.409 C44.009,28.219,44.042,27.861,43.915,27.497z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qsel" x1="36" x2="36" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qsel)" d="M35,6.996c0.474-0.278,0.946-0.582,1.426-0.824c0.164-0.082,0.386-0.41,0.508,0.134 c0.092,0.41,0.084,0.852-0.004,1.275c-0.1,0.48-0.308,0.454-0.496,0.37C35.954,7.736,35.478,7.476,35,7.234 C35,7.154,35,7.076,35,6.996z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qsem" x1="14" x2="14" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qsem)" d="M13,31.755c0.506-0.234,1.008-0.482,1.517-0.694c0.158-0.066,0.394-0.16,0.438,0.216 c0.056,0.462,0.066,0.993-0.004,1.441c-0.07,0.446-0.328,0.252-0.502,0.16c-0.486-0.256-0.964-0.552-1.447-0.832 C13.002,31.951,13.002,31.853,13,31.755z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qsen" x1="20.999" x2="20.999" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qsen)" d="M20,22.755c0.506-0.234,1.008-0.482,1.515-0.694c0.158-0.066,0.394-0.16,0.438,0.216 c0.056,0.462,0.066,0.993-0.004,1.441c-0.07,0.446-0.328,0.252-0.502,0.16c-0.486-0.256-0.964-0.552-1.445-0.832 C20.002,22.951,20.002,22.853,20,22.755z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qseo" x1="30" x2="30" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qseo)" d="M29,18.755c0.506-0.234,1.008-0.482,1.517-0.694c0.158-0.066,0.394-0.16,0.438,0.216 c0.056,0.462,0.066,0.993-0.004,1.441c-0.07,0.446-0.328,0.252-0.502,0.16c-0.486-0.256-0.964-0.552-1.447-0.832 C29.002,18.951,29.002,18.853,29,18.755z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qsep" x1="47" x2="47" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qsep)" d="M46,25.755c0.506-0.234,1.008-0.482,1.516-0.694c0.158-0.066,0.394-0.16,0.438,0.216 c0.056,0.462,0.066,0.993-0.004,1.441c-0.07,0.446-0.328,0.252-0.502,0.16c-0.486-0.256-0.964-0.552-1.446-0.832 C46.002,25.951,46.002,25.853,46,25.755z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qseq" x1="42" x2="42" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qseq)" d="M41,21.755c0.506-0.234,1.008-0.482,1.517-0.694c0.158-0.066,0.394-0.16,0.438,0.216 c0.056,0.462,0.066,0.993-0.004,1.441c-0.07,0.446-0.328,0.252-0.502,0.16c-0.486-0.256-0.964-0.552-1.447-0.832 C41.002,21.951,41.002,21.853,41,21.755z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qser" x1="32.001" x2="32.001" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qser)" d="M52.59,40.9c-0.98,0.13-1.64,0.1-2.62,0.1H37.19c-1.18-1.23-2.85-2-4.69-2s-3.51,0.77-4.69,2 H11.36c-0.42-0.06-0.45-0.28-0.2-0.7c0.4-0.68,0.83-1.34,1.23-2.03c0.13-0.22,0.29-0.27,0.47-0.27h38.05c0.47,0,0.83,0.26,1.11,0.72 c0.3,0.49,0.63,0.97,0.87,1.52C53.1,40.7,53.02,40.85,52.59,40.9z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qses" x1="44.992" x2="44.992" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qses)" d="M51.67,45H38.98c-0.08-1.1-0.44-2.11-1-2.99h13.37c0.26,0,0.38,0.04,0.37,0.43 c-0.01,0.55,0.2,1.56,0.27,2.11C52.04,44.93,51.96,45,51.67,45z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qset" x1="19.508" x2="19.508" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qset)" d="M27.02,42c-0.56,0.88-0.92,1.9-1,3H12.33c-0.29,0-0.37-0.08-0.32-0.45 c0.07-0.55,0.28-1.57,0.27-2.12C12.27,42.04,12.39,42,12.65,42H27.02z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qseu" x1="46" x2="46" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qseu)" d="M52.67,49H39v-3h13.31c0.23,0.01,0.35,0.15,0.38,0.45c0.08,0.58,0.18,1.51,0.29,2.08 C53.03,48.86,53,49,52.67,49z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qsev" x1="18.5" x2="18.5" y1="6.083" y2="48.918" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff" /><stop offset="1" stop-color="#c822ff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qsev)" d="M26,46v3H11.33c-0.33,0-0.36-0.14-0.31-0.47c0.11-0.57,0.21-1.5,0.28-2.08 c0.04-0.3,0.16-0.44,0.39-0.45H26z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qsew" x1="16" x2="16" y1="15.065" y2="49" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff" /><stop offset="1" stop-color="#e6abff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qsew)" d="M29.935,15.067C13.709,16.136,1,29.723,1,46v3h2v-3c0-15.227,11.889-27.938,27.065-28.937 c0.552-0.037,0.969-0.513,0.933-1.064S30.485,15.03,29.935,15.067z" /><linearGradient id="cCxEPjHQOirCFKwqQ4Qsex" x1="52.5" x2="52.5" y1="17.081" y2="49" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff" /><stop offset="1" stop-color="#e6abff" /></linearGradient><path fill="url(#cCxEPjHQOirCFKwqQ4Qsex)" d="M43.367,17.151c-0.518-0.203-1.095,0.049-1.298,0.563c-0.202,0.514,0.05,1.094,0.563,1.297 C53.791,23.411,61,34.004,61,46v3h2v-3C63,33.177,55.294,21.854,43.367,17.151z" /></svg>
      <h2 className="headertext">{props.text}</h2>
      {props.showFavs ? <a className="heart" href="/"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg></a> :
        <a className="heart" href="?q=favs"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="white" /><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></a>}
    </header>
  );
};

export default Header;