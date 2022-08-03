import { Component, OnInit } from '@angular/core';
import { ElementRef, Input, OnChanges } from '@angular/core';
import * as d3 from 'd3';

interface DataChart { year: number, sex: string, name: string; n: number; prop: number }

@Component({
  selector: 'app-d3multilinechart',
  templateUrl: './d3multilinechart.component.html',
  styleUrls: ['./d3multilinechart.component.scss']
})
export class D3multilinechartComponent implements OnInit {

  public data: DataChart[] = [
    {
      "year": 1880,
      "sex": "F",
      "name": "Helen",
      "n": 636,
      "prop": 0.00651612638826278
    },
    {
      "year": 1880,
      "sex": "F",
      "name": "Amanda",
      "n": 241,
      "prop": 0.00246916109995492
    },
    {
      "year": 1880,
      "sex": "F",
      "name": "Betty",
      "n": 117,
      "prop": 0.00119872136387853
    },
    {
      "year": 1880,
      "sex": "F",
      "name": "Dorothy",
      "n": 112,
      "prop": 0.00114749395516577
    },
    {
      "year": 1880,
      "sex": "F",
      "name": "Linda",
      "n": 27,
      "prop": 0.000276628007048891
    },
    {
      "year": 1880,
      "sex": "F",
      "name": "Deborah",
      "n": 12,
      "prop": 0.000122945780910618
    },
    {
      "year": 1880,
      "sex": "F",
      "name": "Jessica",
      "n": 7,
      "prop": 0.0000717183721978607
    },
    {
      "year": 1881,
      "sex": "F",
      "name": "Helen",
      "n": 612,
      "prop": 0.00619088564058469
    },
    {
      "year": 1881,
      "sex": "F",
      "name": "Amanda",
      "n": 263,
      "prop": 0.0026604622932578
    },
    {
      "year": 1881,
      "sex": "F",
      "name": "Betty",
      "n": 112,
      "prop": 0.00113297253553184
    },
    {
      "year": 1881,
      "sex": "F",
      "name": "Dorothy",
      "n": 109,
      "prop": 0.00110262505690152
    },
    {
      "year": 1881,
      "sex": "F",
      "name": "Linda",
      "n": 38,
      "prop": 0.000384401395984017
    },
    {
      "year": 1881,
      "sex": "F",
      "name": "Deborah",
      "n": 14,
      "prop": 0.00014162156694148
    },
    {
      "year": 1881,
      "sex": "F",
      "name": "Jessica",
      "n": 7,
      "prop": 0.00007081078347074
    },
    {
      "year": 1882,
      "sex": "F",
      "name": "Helen",
      "n": 838,
      "prop": 0.00724311990042871
    },
    {
      "year": 1882,
      "sex": "F",
      "name": "Amanda",
      "n": 288,
      "prop": 0.00248928225694925
    },
    {
      "year": 1882,
      "sex": "F",
      "name": "Betty",
      "n": 123,
      "prop": 0.00106313096390541
    },
    {
      "year": 1882,
      "sex": "F",
      "name": "Dorothy",
      "n": 115,
      "prop": 0.000993984234545706
    },
    {
      "year": 1882,
      "sex": "F",
      "name": "Linda",
      "n": 36,
      "prop": 0.000311160282118656
    },
    {
      "year": 1882,
      "sex": "F",
      "name": "Deborah",
      "n": 15,
      "prop": 0.00012965011754944
    },
    {
      "year": 1882,
      "sex": "F",
      "name": "Jessica",
      "n": 8,
      "prop": 0.0000691467293597013
    },
    {
      "year": 1883,
      "sex": "F",
      "name": "Helen",
      "n": 862,
      "prop": 0.0071798032633955
    },
    {
      "year": 1883,
      "sex": "F",
      "name": "Amanda",
      "n": 287,
      "prop": 0.00239049134175697
    },
    {
      "year": 1883,
      "sex": "F",
      "name": "Dorothy",
      "n": 141,
      "prop": 0.00117442257556701
    },
    {
      "year": 1883,
      "sex": "F",
      "name": "Betty",
      "n": 120,
      "prop": 0.000999508574950649
    },
    {
      "year": 1883,
      "sex": "F",
      "name": "Linda",
      "n": 49,
      "prop": 0.000408132668104848
    },
    {
      "year": 1883,
      "sex": "F",
      "name": "Deborah",
      "n": 16,
      "prop": 0.00013326780999342
    },
    {
      "year": 1883,
      "sex": "F",
      "name": "Jessica",
      "n": 6,
      "prop": 0.0000499754287475325
    },
    {
      "year": 1884,
      "sex": "F",
      "name": "Helen",
      "n": 986,
      "prop": 0.00716642681668193
    },
    {
      "year": 1884,
      "sex": "F",
      "name": "Amanda",
      "n": 337,
      "prop": 0.00244937711685782
    },
    {
      "year": 1884,
      "sex": "F",
      "name": "Dorothy",
      "n": 163,
      "prop": 0.00118471356097277
    },
    {
      "year": 1884,
      "sex": "F",
      "name": "Betty",
      "n": 144,
      "prop": 0.00104661811521521
    },
    {
      "year": 1884,
      "sex": "F",
      "name": "Linda",
      "n": 33,
      "prop": 0.000239849984736819
    },
    {
      "year": 1884,
      "sex": "F",
      "name": "Jessica",
      "n": 14,
      "prop": 0.000101754538979257
    },
    {
      "year": 1884,
      "sex": "F",
      "name": "Deborah",
      "n": 13,
      "prop": 0.0000944863576235954
    },
    {
      "year": 1884,
      "sex": "F",
      "name": "Patricia",
      "n": 6,
      "prop": 0.0000436090881339671
    },
    {
      "year": 1885,
      "sex": "F",
      "name": "Helen",
      "n": 1134,
      "prop": 0.00798878470436565
    },
    {
      "year": 1885,
      "sex": "F",
      "name": "Amanda",
      "n": 339,
      "prop": 0.0023881816708818
    },
    {
      "year": 1885,
      "sex": "F",
      "name": "Dorothy",
      "n": 196,
      "prop": 0.00138077760322369
    },
    {
      "year": 1885,
      "sex": "F",
      "name": "Betty",
      "n": 155,
      "prop": 0.0010919414719371
    },
    {
      "year": 1885,
      "sex": "F",
      "name": "Linda",
      "n": 60,
      "prop": 0.000422687021395008
    },
    {
      "year": 1885,
      "sex": "F",
      "name": "Deborah",
      "n": 10,
      "prop": 0.000070447836899168
    },
    {
      "year": 1885,
      "sex": "F",
      "name": "Jessica",
      "n": 6,
      "prop": 0.0000422687021395008
    },
    {
      "year": 1885,
      "sex": "F",
      "name": "Patricia",
      "n": 5,
      "prop": 0.000035223918449584
    },
    {
      "year": 1886,
      "sex": "F",
      "name": "Helen",
      "n": 1267,
      "prop": 0.00824140084300359
    },
    {
      "year": 1886,
      "sex": "F",
      "name": "Amanda",
      "n": 370,
      "prop": 0.0024067232138211
    },
    {
      "year": 1886,
      "sex": "F",
      "name": "Dorothy",
      "n": 230,
      "prop": 0.00149607118696987
    },
    {
      "year": 1886,
      "sex": "F",
      "name": "Betty",
      "n": 167,
      "prop": 0.00108627777488682
    },
    {
      "year": 1886,
      "sex": "F",
      "name": "Linda",
      "n": 49,
      "prop": 0.000318728209397929
    },
    {
      "year": 1886,
      "sex": "F",
      "name": "Jessica",
      "n": 11,
      "prop": 0.0000715512306811677
    },
    {
      "year": 1886,
      "sex": "F",
      "name": "Deborah",
      "n": 10,
      "prop": 0.0000650465733465161
    },
    {
      "year": 1886,
      "sex": "F",
      "name": "Patricia",
      "n": 8,
      "prop": 0.0000520372586772129
    },
    {
      "year": 1887,
      "sex": "F",
      "name": "Helen",
      "n": 1405,
      "prop": 0.00903990426065808
    },
    {
      "year": 1887,
      "sex": "F",
      "name": "Amanda",
      "n": 338,
      "prop": 0.00217472429900529
    },
    {
      "year": 1887,
      "sex": "F",
      "name": "Dorothy",
      "n": 272,
      "prop": 0.00175007399209893
    },
    {
      "year": 1887,
      "sex": "F",
      "name": "Betty",
      "n": 178,
      "prop": 0.00114526900953533
    },
    {
      "year": 1887,
      "sex": "F",
      "name": "Linda",
      "n": 50,
      "prop": 0.000321704777959362
    },
    {
      "year": 1887,
      "sex": "F",
      "name": "Deborah",
      "n": 15,
      "prop": 0.0000965114333878087
    },
    {
      "year": 1887,
      "sex": "F",
      "name": "Patricia",
      "n": 10,
      "prop": 0.0000643409555918724
    },
    {
      "year": 1887,
      "sex": "F",
      "name": "Jessica",
      "n": 8,
      "prop": 0.000051472764473498
    },
    {
      "year": 1888,
      "sex": "F",
      "name": "Helen",
      "n": 1847,
      "prop": 0.0097494286000834
    },
    {
      "year": 1888,
      "sex": "F",
      "name": "Amanda",
      "n": 404,
      "prop": 0.0021325225524817
    },
    {
      "year": 1888,
      "sex": "F",
      "name": "Dorothy",
      "n": 373,
      "prop": 0.00196888839622691
    },
    {
      "year": 1888,
      "sex": "F",
      "name": "Betty",
      "n": 214,
      "prop": 0.00112960353027496
    },
    {
      "year": 1888,
      "sex": "F",
      "name": "Linda",
      "n": 77,
      "prop": 0.000406446130052205
    },
    {
      "year": 1888,
      "sex": "F",
      "name": "Deborah",
      "n": 26,
      "prop": 0.000137241550407238
    },
    {
      "year": 1888,
      "sex": "F",
      "name": "Jessica",
      "n": 18,
      "prop": 0.0000950133810511647
    },
    {
      "year": 1888,
      "sex": "F",
      "name": "Patricia",
      "n": 12,
      "prop": 0.0000633422540341098
    },
    {
      "year": 1889,
      "sex": "F",
      "name": "Helen",
      "n": 1909,
      "prop": 0.010088838858677
    },
    {
      "year": 1889,
      "sex": "F",
      "name": "Amanda",
      "n": 413,
      "prop": 0.00218265607576406
    },
    {
      "year": 1889,
      "sex": "F",
      "name": "Dorothy",
      "n": 377,
      "prop": 0.00199240034034637
    },
    {
      "year": 1889,
      "sex": "F",
      "name": "Betty",
      "n": 189,
      "prop": 0.000998842610942876
    },
    {
      "year": 1889,
      "sex": "F",
      "name": "Linda",
      "n": 74,
      "prop": 0.000391081233914142
    },
    {
      "year": 1889,
      "sex": "F",
      "name": "Patricia",
      "n": 17,
      "prop": 0.000089842986169465
    },
    {
      "year": 1889,
      "sex": "F",
      "name": "Deborah",
      "n": 12,
      "prop": 0.0000634185784725635
    },
    {
      "year": 1889,
      "sex": "F",
      "name": "Jessica",
      "n": 9,
      "prop": 0.0000475639338544226
    },
    {
      "year": 1890,
      "sex": "F",
      "name": "Helen",
      "n": 2312,
      "prop": 0.0114647849608997
    },
    {
      "year": 1890,
      "sex": "F",
      "name": "Dorothy",
      "n": 458,
      "prop": 0.00227113819727166
    },
    {
      "year": 1890,
      "sex": "F",
      "name": "Amanda",
      "n": 392,
      "prop": 0.00194385627364736
    },
    {
      "year": 1890,
      "sex": "F",
      "name": "Betty",
      "n": 216,
      "prop": 0.00107110447731589
    },
    {
      "year": 1890,
      "sex": "F",
      "name": "Linda",
      "n": 54,
      "prop": 0.000267776119328973
    },
    {
      "year": 1890,
      "sex": "F",
      "name": "Deborah",
      "n": 24,
      "prop": 0.000119011608590655
    },
    {
      "year": 1890,
      "sex": "F",
      "name": "Jessica",
      "n": 18,
      "prop": 0.000089258706442991
    },
    {
      "year": 1890,
      "sex": "F",
      "name": "Patricia",
      "n": 11,
      "prop": 0.0000545469872707167
    },
    {
      "year": 1891,
      "sex": "F",
      "name": "Helen",
      "n": 2417,
      "prop": 0.0122960619025574
    },
    {
      "year": 1891,
      "sex": "F",
      "name": "Dorothy",
      "n": 566,
      "prop": 0.00287942533589056
    },
    {
      "year": 1891,
      "sex": "F",
      "name": "Amanda",
      "n": 371,
      "prop": 0.00188739717246537
    },
    {
      "year": 1891,
      "sex": "F",
      "name": "Betty",
      "n": 239,
      "prop": 0.00121587041568524
    },
    {
      "year": 1891,
      "sex": "F",
      "name": "Linda",
      "n": 78,
      "prop": 0.000396811265370077
    },
    {
      "year": 1891,
      "sex": "F",
      "name": "Deborah",
      "n": 15,
      "prop": 0.0000763098587250149
    },
    {
      "year": 1891,
      "sex": "F",
      "name": "Jessica",
      "n": 14,
      "prop": 0.0000712225348100139
    },
    {
      "year": 1891,
      "sex": "F",
      "name": "Patricia",
      "n": 12,
      "prop": 0.0000610478869800119
    },
    {
      "year": 1892,
      "sex": "F",
      "name": "Helen",
      "n": 2936,
      "prop": 0.0130538203321255
    },
    {
      "year": 1892,
      "sex": "F",
      "name": "Dorothy",
      "n": 626,
      "prop": 0.00278327368116844
    },
    {
      "year": 1892,
      "sex": "F",
      "name": "Amanda",
      "n": 455,
      "prop": 0.00202298646155214
    },
    {
      "year": 1892,
      "sex": "F",
      "name": "Betty",
      "n": 255,
      "prop": 0.00113376164328746
    },
    {
      "year": 1892,
      "sex": "F",
      "name": "Linda",
      "n": 83,
      "prop": 0.000369028299579841
    },
    {
      "year": 1892,
      "sex": "F",
      "name": "Patricia",
      "n": 21,
      "prop": 0.0000933686059177912
    },
    {
      "year": 1892,
      "sex": "F",
      "name": "Deborah",
      "n": 16,
      "prop": 0.0000711379854611742
    },
    {
      "year": 1892,
      "sex": "F",
      "name": "Jessica",
      "n": 14,
      "prop": 0.0000622457372785274
    },
    {
      "year": 1893,
      "sex": "F",
      "name": "Helen",
      "n": 3249,
      "prop": 0.0144251260922071
    },
    {
      "year": 1893,
      "sex": "F",
      "name": "Dorothy",
      "n": 821,
      "prop": 0.00364513035447894
    },
    {
      "year": 1893,
      "sex": "F",
      "name": "Amanda",
      "n": 387,
      "prop": 0.00171822831569226
    },
    {
      "year": 1893,
      "sex": "F",
      "name": "Betty",
      "n": 298,
      "prop": 0.00132308020174753
    },
    {
      "year": 1893,
      "sex": "F",
      "name": "Linda",
      "n": 82,
      "prop": 0.000364069048803012
    },
    {
      "year": 1893,
      "sex": "F",
      "name": "Patricia",
      "n": 28,
      "prop": 0.000124316260566882
    },
    {
      "year": 1893,
      "sex": "F",
      "name": "Deborah",
      "n": 24,
      "prop": 0.000106556794771613
    },
    {
      "year": 1893,
      "sex": "F",
      "name": "Jessica",
      "n": 15,
      "prop": 0.0000665979967322583
    },
    {
      "year": 1894,
      "sex": "F",
      "name": "Helen",
      "n": 3676,
      "prop": 0.0155781194378994
    },
    {
      "year": 1894,
      "sex": "F",
      "name": "Dorothy",
      "n": 1052,
      "prop": 0.004458156052413
    },
    {
      "year": 1894,
      "sex": "F",
      "name": "Amanda",
      "n": 418,
      "prop": 0.00177139660637703
    },
    {
      "year": 1894,
      "sex": "F",
      "name": "Betty",
      "n": 298,
      "prop": 0.00126286169545539
    },
    {
      "year": 1894,
      "sex": "F",
      "name": "Linda",
      "n": 94,
      "prop": 0.000398352346888614
    },
    {
      "year": 1894,
      "sex": "F",
      "name": "Patricia",
      "n": 36,
      "prop": 0.00015256047327649
    },
    {
      "year": 1894,
      "sex": "F",
      "name": "Deborah",
      "n": 18,
      "prop": 0.0000762802366382452
    },
    {
      "year": 1894,
      "sex": "F",
      "name": "Jessica",
      "n": 10,
      "prop": 0.0000423779092434696
    },
    {
      "year": 1895,
      "sex": "F",
      "name": "Helen",
      "n": 4023,
      "prop": 0.0162803967512049
    },
    {
      "year": 1895,
      "sex": "F",
      "name": "Dorothy",
      "n": 1127,
      "prop": 0.00456077731509022
    },
    {
      "year": 1895,
      "sex": "F",
      "name": "Amanda",
      "n": 431,
      "prop": 0.00174418369370354
    },
    {
      "year": 1895,
      "sex": "F",
      "name": "Betty",
      "n": 350,
      "prop": 0.00141639047052491
    },
    {
      "year": 1895,
      "sex": "F",
      "name": "Linda",
      "n": 96,
      "prop": 0.000388495671915405
    },
    {
      "year": 1895,
      "sex": "F",
      "name": "Patricia",
      "n": 35,
      "prop": 0.000141639047052491
    },
    {
      "year": 1895,
      "sex": "F",
      "name": "Jessica",
      "n": 19,
      "prop": 0.0000768897683999239
    },
    {
      "year": 1895,
      "sex": "F",
      "name": "Deborah",
      "n": 13,
      "prop": 0.0000526087889052111
    },
    {
      "year": 1896,
      "sex": "F",
      "name": "Helen",
      "n": 4392,
      "prop": 0.0174290555690039
    },
    {
      "year": 1896,
      "sex": "F",
      "name": "Dorothy",
      "n": 1366,
      "prop": 0.00542078549800987
    },
    {
      "year": 1896,
      "sex": "F",
      "name": "Amanda",
      "n": 367,
      "prop": 0.00145638966161758
    },
    {
      "year": 1896,
      "sex": "F",
      "name": "Betty",
      "n": 342,
      "prop": 0.00135718055660276
    },
    {
      "year": 1896,
      "sex": "F",
      "name": "Linda",
      "n": 104,
      "prop": 0.000412709876861659
    },
    {
      "year": 1896,
      "sex": "F",
      "name": "Patricia",
      "n": 37,
      "prop": 0.000146829475421936
    },
    {
      "year": 1896,
      "sex": "F",
      "name": "Deborah",
      "n": 18,
      "prop": 0.0000714305556106717
    },
    {
      "year": 1896,
      "sex": "F",
      "name": "Jessica",
      "n": 9,
      "prop": 0.0000357152778053359
    },
    {
      "year": 1897,
      "sex": "F",
      "name": "Helen",
      "n": 4519,
      "prop": 0.0182015909777464
    },
    {
      "year": 1897,
      "sex": "F",
      "name": "Dorothy",
      "n": 1472,
      "prop": 0.00592890947538012
    },
    {
      "year": 1897,
      "sex": "F",
      "name": "Betty",
      "n": 367,
      "prop": 0.00147819957708186
    },
    {
      "year": 1897,
      "sex": "F",
      "name": "Amanda",
      "n": 354,
      "prop": 0.00142583828416071
    },
    {
      "year": 1897,
      "sex": "F",
      "name": "Linda",
      "n": 81,
      "prop": 0.000326251132816433
    },
    {
      "year": 1897,
      "sex": "F",
      "name": "Patricia",
      "n": 49,
      "prop": 0.000197361796395126
    },
    {
      "year": 1897,
      "sex": "F",
      "name": "Deborah",
      "n": 23,
      "prop": 0.0000926392105528144
    },
    {
      "year": 1897,
      "sex": "F",
      "name": "Jessica",
      "n": 9,
      "prop": 0.0000362501258684926
    },
    {
      "year": 1898,
      "sex": "F",
      "name": "Helen",
      "n": 5230,
      "prop": 0.0190774258971497
    },
    {
      "year": 1898,
      "sex": "F",
      "name": "Dorothy",
      "n": 1671,
      "prop": 0.00609529228950997
    },
    {
      "year": 1898,
      "sex": "F",
      "name": "Betty",
      "n": 421,
      "prop": 0.00153567806934991
    },
    {
      "year": 1898,
      "sex": "F",
      "name": "Amanda",
      "n": 371,
      "prop": 0.00135329350054351
    },
    {
      "year": 1898,
      "sex": "F",
      "name": "Linda",
      "n": 102,
      "prop": 0.000372064520365061
    },
    {
      "year": 1898,
      "sex": "F",
      "name": "Patricia",
      "n": 47,
      "prop": 0.000171441494678018
    },
    {
      "year": 1898,
      "sex": "F",
      "name": "Deborah",
      "n": 21,
      "prop": 0.000076601518898689
    },
    {
      "year": 1898,
      "sex": "F",
      "name": "Jessica",
      "n": 13,
      "prop": 0.0000474199878896646
    },
    {
      "year": 1899,
      "sex": "F",
      "name": "Helen",
      "n": 5048,
      "prop": 0.0203967837084327
    },
    {
      "year": 1899,
      "sex": "F",
      "name": "Dorothy",
      "n": 1687,
      "prop": 0.0068164370277587
    },
    {
      "year": 1899,
      "sex": "F",
      "name": "Betty",
      "n": 410,
      "prop": 0.00165663259121581
    },
    {
      "year": 1899,
      "sex": "F",
      "name": "Amanda",
      "n": 326,
      "prop": 0.00131722493838135
    },
    {
      "year": 1899,
      "sex": "F",
      "name": "Linda",
      "n": 98,
      "prop": 0.000395975594973534
    },
    {
      "year": 1899,
      "sex": "F",
      "name": "Patricia",
      "n": 56,
      "prop": 0.000226271768556305
    },
    {
      "year": 1899,
      "sex": "F",
      "name": "Jessica",
      "n": 14,
      "prop": 0.0000565679421390763
    },
    {
      "year": 1899,
      "sex": "F",
      "name": "Deborah",
      "n": 11,
      "prop": 0.0000444462402521314
    },
    {
      "year": 1900,
      "sex": "F",
      "name": "Helen",
      "n": 6343,
      "prop": 0.0199606639918181
    },
    {
      "year": 1900,
      "sex": "F",
      "name": "Dorothy",
      "n": 2491,
      "prop": 0.00783887971048698
    },
    {
      "year": 1900,
      "sex": "F",
      "name": "Betty",
      "n": 664,
      "prop": 0.00208952875462198
    },
    {
      "year": 1900,
      "sex": "F",
      "name": "Amanda",
      "n": 377,
      "prop": 0.00118637400676579
    },
    {
      "year": 1900,
      "sex": "F",
      "name": "Linda",
      "n": 126,
      "prop": 0.000396506962473448
    },
    {
      "year": 1900,
      "sex": "F",
      "name": "Patricia",
      "n": 89,
      "prop": 0.000280072378255055
    },
    {
      "year": 1900,
      "sex": "F",
      "name": "Deborah",
      "n": 26,
      "prop": 0.0000818188970183306
    },
    {
      "year": 1900,
      "sex": "F",
      "name": "Jessica",
      "n": 23,
      "prop": 0.000072378255054677
    },
    {
      "year": 1901,
      "sex": "F",
      "name": "Helen",
      "n": 5247,
      "prop": 0.0206386292834891
    },
    {
      "year": 1901,
      "sex": "F",
      "name": "Dorothy",
      "n": 2173,
      "prop": 0.00854731111740458
    },
    {
      "year": 1901,
      "sex": "F",
      "name": "Betty",
      "n": 474,
      "prop": 0.00186443878032663
    },
    {
      "year": 1901,
      "sex": "F",
      "name": "Amanda",
      "n": 317,
      "prop": 0.00124689260203279
    },
    {
      "year": 1901,
      "sex": "F",
      "name": "Linda",
      "n": 86,
      "prop": 0.000338273702759684
    },
    {
      "year": 1901,
      "sex": "F",
      "name": "Patricia",
      "n": 68,
      "prop": 0.000267472230089053
    },
    {
      "year": 1901,
      "sex": "F",
      "name": "Deborah",
      "n": 21,
      "prop": 0.0000826017181157368
    },
    {
      "year": 1901,
      "sex": "F",
      "name": "Jessica",
      "n": 8,
      "prop": 0.0000314673211869474
    },
    {
      "year": 1902,
      "sex": "F",
      "name": "Helen",
      "n": 5967,
      "prop": 0.0212853998637335
    },
    {
      "year": 1902,
      "sex": "F",
      "name": "Dorothy",
      "n": 2707,
      "prop": 0.00965637295644822
    },
    {
      "year": 1902,
      "sex": "F",
      "name": "Betty",
      "n": 580,
      "prop": 0.00206896797736977
    },
    {
      "year": 1902,
      "sex": "F",
      "name": "Amanda",
      "n": 301,
      "prop": 0.00107372303653155
    },
    {
      "year": 1902,
      "sex": "F",
      "name": "Linda",
      "n": 91,
      "prop": 0.000324613941276981
    },
    {
      "year": 1902,
      "sex": "F",
      "name": "Patricia",
      "n": 85,
      "prop": 0.000303210824269708
    },
    {
      "year": 1902,
      "sex": "F",
      "name": "Deborah",
      "n": 21,
      "prop": 0.0000749109095254572
    },
    {
      "year": 1902,
      "sex": "F",
      "name": "Jessica",
      "n": 9,
      "prop": 0.0000321046755109102
    },
    {
      "year": 1903,
      "sex": "F",
      "name": "Helen",
      "n": 6129,
      "prop": 0.0220310713951934
    },
    {
      "year": 1903,
      "sex": "F",
      "name": "Dorothy",
      "n": 3078,
      "prop": 0.0110640622865729
    },
    {
      "year": 1903,
      "sex": "F",
      "name": "Betty",
      "n": 596,
      "prop": 0.00214235903924543
    },
    {
      "year": 1903,
      "sex": "F",
      "name": "Amanda",
      "n": 247,
      "prop": 0.000887856850157082
    },
    {
      "year": 1903,
      "sex": "F",
      "name": "Linda",
      "n": 90,
      "prop": 0.000323510593174645
    },
    {
      "year": 1903,
      "sex": "F",
      "name": "Patricia",
      "n": 79,
      "prop": 0.000283970409564411
    },
    {
      "year": 1903,
      "sex": "F",
      "name": "Deborah",
      "n": 21,
      "prop": 0.0000754858050740839
    },
    {
      "year": 1903,
      "sex": "F",
      "name": "Jessica",
      "n": 16,
      "prop": 0.0000575129943421592
    },
    {
      "year": 1904,
      "sex": "F",
      "name": "Helen",
      "n": 6488,
      "prop": 0.0221858992333418
    },
    {
      "year": 1904,
      "sex": "F",
      "name": "Dorothy",
      "n": 3477,
      "prop": 0.0118896996970298
    },
    {
      "year": 1904,
      "sex": "F",
      "name": "Betty",
      "n": 707,
      "prop": 0.00241760646701181
    },
    {
      "year": 1904,
      "sex": "F",
      "name": "Amanda",
      "n": 294,
      "prop": 0.00100534130311382
    },
    {
      "year": 1904,
      "sex": "F",
      "name": "Patricia",
      "n": 124,
      "prop": 0.000424021501993585
    },
    {
      "year": 1904,
      "sex": "F",
      "name": "Linda",
      "n": 101,
      "prop": 0.000345372352430259
    },
    {
      "year": 1904,
      "sex": "F",
      "name": "Deborah",
      "n": 23,
      "prop": 0.0000786491495633262
    },
    {
      "year": 1904,
      "sex": "F",
      "name": "Jessica",
      "n": 16,
      "prop": 0.00005471245187014
    },
    {
      "year": 1905,
      "sex": "F",
      "name": "Helen",
      "n": 6811,
      "prop": 0.0219801852389712
    },
    {
      "year": 1905,
      "sex": "F",
      "name": "Dorothy",
      "n": 3937,
      "prop": 0.0127053280407913
    },
    {
      "year": 1905,
      "sex": "F",
      "name": "Betty",
      "n": 807,
      "prop": 0.0026043179397812
    },
    {
      "year": 1905,
      "sex": "F",
      "name": "Amanda",
      "n": 311,
      "prop": 0.00100364669054765
    },
    {
      "year": 1905,
      "sex": "F",
      "name": "Patricia",
      "n": 121,
      "prop": 0.000390486332978346
    },
    {
      "year": 1905,
      "sex": "F",
      "name": "Linda",
      "n": 106,
      "prop": 0.000342078936328138
    },
    {
      "year": 1905,
      "sex": "F",
      "name": "Deborah",
      "n": 18,
      "prop": 0.0000580888759802498
    },
    {
      "year": 1905,
      "sex": "F",
      "name": "Jessica",
      "n": 17,
      "prop": 0.0000548617162035692
    },
    {
      "year": 1906,
      "sex": "F",
      "name": "Helen",
      "n": 7176,
      "prop": 0.0228942608018734
    },
    {
      "year": 1906,
      "sex": "F",
      "name": "Dorothy",
      "n": 4326,
      "prop": 0.013801640500126
    },
    {
      "year": 1906,
      "sex": "F",
      "name": "Betty",
      "n": 865,
      "prop": 0.00275969002140754
    },
    {
      "year": 1906,
      "sex": "F",
      "name": "Amanda",
      "n": 260,
      "prop": 0.000829502202966427
    },
    {
      "year": 1906,
      "sex": "F",
      "name": "Patricia",
      "n": 157,
      "prop": 0.000500891714868189
    },
    {
      "year": 1906,
      "sex": "F",
      "name": "Linda",
      "n": 98,
      "prop": 0.000312658522656576
    },
    {
      "year": 1906,
      "sex": "F",
      "name": "Deborah",
      "n": 25,
      "prop": 0.0000797598272083103
    },
    {
      "year": 1906,
      "sex": "F",
      "name": "Jessica",
      "n": 18,
      "prop": 0.0000574270755899834
    },
    {
      "year": 1907,
      "sex": "F",
      "name": "Helen",
      "n": 7579,
      "prop": 0.0224607551721379
    },
    {
      "year": 1907,
      "sex": "F",
      "name": "Dorothy",
      "n": 4967,
      "prop": 0.0147199592215343
    },
    {
      "year": 1907,
      "sex": "F",
      "name": "Betty",
      "n": 1018,
      "prop": 0.00301689520586309
    },
    {
      "year": 1907,
      "sex": "F",
      "name": "Amanda",
      "n": 285,
      "prop": 0.000844612115590354
    },
    {
      "year": 1907,
      "sex": "F",
      "name": "Patricia",
      "n": 177,
      "prop": 0.000524548577050852
    },
    {
      "year": 1907,
      "sex": "F",
      "name": "Linda",
      "n": 102,
      "prop": 0.000302282230842864
    },
    {
      "year": 1907,
      "sex": "F",
      "name": "Deborah",
      "n": 21,
      "prop": 0.0000622345769382366
    },
    {
      "year": 1907,
      "sex": "F",
      "name": "Jessica",
      "n": 17,
      "prop": 0.0000503803718071439
    },
    {
      "year": 1908,
      "sex": "F",
      "name": "Helen",
      "n": 8439,
      "prop": 0.0238031438540277
    },
    {
      "year": 1908,
      "sex": "F",
      "name": "Dorothy",
      "n": 5703,
      "prop": 0.0160859496859249
    },
    {
      "year": 1908,
      "sex": "F",
      "name": "Betty",
      "n": 1128,
      "prop": 0.00318165022720029
    },
    {
      "year": 1908,
      "sex": "F",
      "name": "Amanda",
      "n": 260,
      "prop": 0.000733359094922052
    },
    {
      "year": 1908,
      "sex": "F",
      "name": "Patricia",
      "n": 205,
      "prop": 0.000578225440227003
    },
    {
      "year": 1908,
      "sex": "F",
      "name": "Linda",
      "n": 93,
      "prop": 0.000262316907029811
    },
    {
      "year": 1908,
      "sex": "F",
      "name": "Deborah",
      "n": 25,
      "prop": 0.0000705152975886589
    },
    {
      "year": 1908,
      "sex": "F",
      "name": "Jessica",
      "n": 17,
      "prop": 0.000047950402360288
    },
    {
      "year": 1909,
      "sex": "F",
      "name": "Helen",
      "n": 9250,
      "prop": 0.0251291775559769
    },
    {
      "year": 1909,
      "sex": "F",
      "name": "Dorothy",
      "n": 6253,
      "prop": 0.0169873240278404
    },
    {
      "year": 1909,
      "sex": "F",
      "name": "Betty",
      "n": 1082,
      "prop": 0.00293943460708833
    },
    {
      "year": 1909,
      "sex": "F",
      "name": "Amanda",
      "n": 271,
      "prop": 0.000736216985694027
    },
    {
      "year": 1909,
      "sex": "F",
      "name": "Patricia",
      "n": 233,
      "prop": 0.00063298360762623
    },
    {
      "year": 1909,
      "sex": "F",
      "name": "Linda",
      "n": 105,
      "prop": 0.000285250123608387
    },
    {
      "year": 1909,
      "sex": "F",
      "name": "Deborah",
      "n": 26,
      "prop": 0.0000706333639411244
    },
    {
      "year": 1909,
      "sex": "F",
      "name": "Jessica",
      "n": 18,
      "prop": 0.0000489000211900092
    },
    {
      "year": 1910,
      "sex": "F",
      "name": "Helen",
      "n": 10479,
      "prop": 0.0249781896712004
    },
    {
      "year": 1910,
      "sex": "F",
      "name": "Dorothy",
      "n": 7318,
      "prop": 0.0174434957547327
    },
    {
      "year": 1910,
      "sex": "F",
      "name": "Betty",
      "n": 1389,
      "prop": 0.00331087942106091
    },
    {
      "year": 1910,
      "sex": "F",
      "name": "Patricia",
      "n": 316,
      "prop": 0.000753231027397587
    },
    {
      "year": 1910,
      "sex": "F",
      "name": "Amanda",
      "n": 278,
      "prop": 0.000662652612710535
    },
    {
      "year": 1910,
      "sex": "F",
      "name": "Linda",
      "n": 137,
      "prop": 0.000326559021371739
    },
    {
      "year": 1910,
      "sex": "F",
      "name": "Deborah",
      "n": 33,
      "prop": 0.000078660202228229
    },
    {
      "year": 1910,
      "sex": "F",
      "name": "Jessica",
      "n": 28,
      "prop": 0.0000667419897694064
    },
    {
      "year": 1911,
      "sex": "F",
      "name": "Helen",
      "n": 11802,
      "prop": 0.0267127194372267
    },
    {
      "year": 1911,
      "sex": "F",
      "name": "Dorothy",
      "n": 8869,
      "prop": 0.0200741491856265
    },
    {
      "year": 1911,
      "sex": "F",
      "name": "Betty",
      "n": 1456,
      "prop": 0.00329551936117625
    },
    {
      "year": 1911,
      "sex": "F",
      "name": "Patricia",
      "n": 325,
      "prop": 0.000735607000262555
    },
    {
      "year": 1911,
      "sex": "F",
      "name": "Amanda",
      "n": 280,
      "prop": 0.000633753723303124
    },
    {
      "year": 1911,
      "sex": "F",
      "name": "Linda",
      "n": 130,
      "prop": 0.000294242800105022
    },
    {
      "year": 1911,
      "sex": "F",
      "name": "Deborah",
      "n": 36,
      "prop": 0.0000814826215675446
    },
    {
      "year": 1911,
      "sex": "F",
      "name": "Jessica",
      "n": 21,
      "prop": 0.0000475315292477343
    },
    {
      "year": 1912,
      "sex": "F",
      "name": "Helen",
      "n": 16133,
      "prop": 0.0274974944947061
    },
    {
      "year": 1912,
      "sex": "F",
      "name": "Dorothy",
      "n": 12645,
      "prop": 0.0215524588040388
    },
    {
      "year": 1912,
      "sex": "F",
      "name": "Betty",
      "n": 2011,
      "prop": 0.00342759941913183
    },
    {
      "year": 1912,
      "sex": "F",
      "name": "Patricia",
      "n": 504,
      "prop": 0.000859030386495497
    },
    {
      "year": 1912,
      "sex": "F",
      "name": "Amanda",
      "n": 310,
      "prop": 0.000528371864709532
    },
    {
      "year": 1912,
      "sex": "F",
      "name": "Linda",
      "n": 189,
      "prop": 0.000322136394935811
    },
    {
      "year": 1912,
      "sex": "F",
      "name": "Jessica",
      "n": 36,
      "prop": 0.0000613593133211069
    },
    {
      "year": 1912,
      "sex": "F",
      "name": "Deborah",
      "n": 32,
      "prop": 0.0000545416118409839
    },
    {
      "year": 1913,
      "sex": "F",
      "name": "Helen",
      "n": 18889,
      "prop": 0.0288423952212843
    },
    {
      "year": 1913,
      "sex": "F",
      "name": "Dorothy",
      "n": 14674,
      "prop": 0.0224063374173925
    },
    {
      "year": 1913,
      "sex": "F",
      "name": "Betty",
      "n": 2239,
      "prop": 0.00341882168989653
    },
    {
      "year": 1913,
      "sex": "F",
      "name": "Patricia",
      "n": 588,
      "prop": 0.000897841515703065
    },
    {
      "year": 1913,
      "sex": "F",
      "name": "Amanda",
      "n": 346,
      "prop": 0.000528321708219831
    },
    {
      "year": 1913,
      "sex": "F",
      "name": "Linda",
      "n": 238,
      "prop": 0.000363412042070288
    },
    {
      "year": 1913,
      "sex": "F",
      "name": "Deborah",
      "n": 42,
      "prop": 0.0000641315368359332
    },
    {
      "year": 1913,
      "sex": "F",
      "name": "Jessica",
      "n": 25,
      "prop": 0.0000381735338309126
    },
    {
      "year": 1914,
      "sex": "F",
      "name": "Helen",
      "n": 23221,
      "prop": 0.0291498453442597
    },
    {
      "year": 1914,
      "sex": "F",
      "name": "Dorothy",
      "n": 18782,
      "prop": 0.0235774684662971
    },
    {
      "year": 1914,
      "sex": "F",
      "name": "Betty",
      "n": 2933,
      "prop": 0.00368186109102595
    },
    {
      "year": 1914,
      "sex": "F",
      "name": "Patricia",
      "n": 656,
      "prop": 0.000823491604402667
    },
    {
      "year": 1914,
      "sex": "F",
      "name": "Amanda",
      "n": 375,
      "prop": 0.000470745962882622
    },
    {
      "year": 1914,
      "sex": "F",
      "name": "Linda",
      "n": 219,
      "prop": 0.000274915642323451
    },
    {
      "year": 1914,
      "sex": "F",
      "name": "Deborah",
      "n": 62,
      "prop": 0.0000778299991965936
    },
    {
      "year": 1914,
      "sex": "F",
      "name": "Jessica",
      "n": 42,
      "prop": 0.0000527235478428537
    },
    {
      "year": 1915,
      "sex": "F",
      "name": "Helen",
      "n": 30866,
      "prop": 0.0301460519864594
    },
    {
      "year": 1915,
      "sex": "F",
      "name": "Dorothy",
      "n": 25154,
      "prop": 0.0245672841206311
    },
    {
      "year": 1915,
      "sex": "F",
      "name": "Betty",
      "n": 4182,
      "prop": 0.00408445504462428
    },
    {
      "year": 1915,
      "sex": "F",
      "name": "Patricia",
      "n": 895,
      "prop": 0.000874124166652017
    },
    {
      "year": 1915,
      "sex": "F",
      "name": "Amanda",
      "n": 412,
      "prop": 0.000402390119173889
    },
    {
      "year": 1915,
      "sex": "F",
      "name": "Linda",
      "n": 290,
      "prop": 0.000283235763496184
    },
    {
      "year": 1915,
      "sex": "F",
      "name": "Deborah",
      "n": 106,
      "prop": 0.000103527554933088
    },
    {
      "year": 1915,
      "sex": "F",
      "name": "Jessica",
      "n": 55,
      "prop": 0.0000537171275596211
    },
    {
      "year": 1916,
      "sex": "F",
      "name": "Helen",
      "n": 32661,
      "prop": 0.0300826741628504
    },
    {
      "year": 1916,
      "sex": "F",
      "name": "Dorothy",
      "n": 27415,
      "prop": 0.0252508040836026
    },
    {
      "year": 1916,
      "sex": "F",
      "name": "Betty",
      "n": 5136,
      "prop": 0.00473055370320565
    },
    {
      "year": 1916,
      "sex": "F",
      "name": "Patricia",
      "n": 1078,
      "prop": 0.000992900485213335
    },
    {
      "year": 1916,
      "sex": "F",
      "name": "Amanda",
      "n": 421,
      "prop": 0.000387765402852332
    },
    {
      "year": 1916,
      "sex": "F",
      "name": "Linda",
      "n": 297,
      "prop": 0.000273554215313878
    },
    {
      "year": 1916,
      "sex": "F",
      "name": "Deborah",
      "n": 90,
      "prop": 0.0000828952167617813
    },
    {
      "year": 1916,
      "sex": "F",
      "name": "Jessica",
      "n": 53,
      "prop": 0.000048816072093049
    },
    {
      "year": 1917,
      "sex": "F",
      "name": "Helen",
      "n": 34249,
      "prop": 0.0304787212268021
    },
    {
      "year": 1917,
      "sex": "F",
      "name": "Dorothy",
      "n": 28853,
      "prop": 0.0256767363589279
    },
    {
      "year": 1917,
      "sex": "F",
      "name": "Betty",
      "n": 6639,
      "prop": 0.00590815002554058
    },
    {
      "year": 1917,
      "sex": "F",
      "name": "Patricia",
      "n": 1441,
      "prop": 0.00128236845711763
    },
    {
      "year": 1917,
      "sex": "F",
      "name": "Amanda",
      "n": 445,
      "prop": 0.000396012465938478
    },
    {
      "year": 1917,
      "sex": "F",
      "name": "Linda",
      "n": 291,
      "prop": 0.000258965455254151
    },
    {
      "year": 1917,
      "sex": "F",
      "name": "Deborah",
      "n": 89,
      "prop": 0.0000792024931876957
    },
    {
      "year": 1917,
      "sex": "F",
      "name": "Jessica",
      "n": 55,
      "prop": 0.0000489453609586883
    },
    {
      "year": 1917,
      "sex": "F",
      "name": "Ashley",
      "n": 5,
      "prop": 0.00000444957826897167
    },
    {
      "year": 1918,
      "sex": "F",
      "name": "Helen",
      "n": 36150,
      "prop": 0.030065795437817
    },
    {
      "year": 1918,
      "sex": "F",
      "name": "Dorothy",
      "n": 32034,
      "prop": 0.026642536405395
    },
    {
      "year": 1918,
      "sex": "F",
      "name": "Betty",
      "n": 8802,
      "prop": 0.00732058454892574
    },
    {
      "year": 1918,
      "sex": "F",
      "name": "Patricia",
      "n": 1760,
      "prop": 0.0014637842315507
    },
    {
      "year": 1918,
      "sex": "F",
      "name": "Amanda",
      "n": 397,
      "prop": 0.000330183147685017
    },
    {
      "year": 1918,
      "sex": "F",
      "name": "Linda",
      "n": 322,
      "prop": 0.00026780597872689
    },
    {
      "year": 1918,
      "sex": "F",
      "name": "Deborah",
      "n": 92,
      "prop": 0.0000765159939219687
    },
    {
      "year": 1918,
      "sex": "F",
      "name": "Jessica",
      "n": 56,
      "prop": 0.0000465749528220679
    },
    {
      "year": 1919,
      "sex": "F",
      "name": "Helen",
      "n": 33705,
      "prop": 0.0286936534286809
    },
    {
      "year": 1919,
      "sex": "F",
      "name": "Dorothy",
      "n": 31734,
      "prop": 0.0270157068062827
    },
    {
      "year": 1919,
      "sex": "F",
      "name": "Betty",
      "n": 10107,
      "prop": 0.00860426510024262
    },
    {
      "year": 1919,
      "sex": "F",
      "name": "Patricia",
      "n": 2144,
      "prop": 0.00182522453496786
    },
    {
      "year": 1919,
      "sex": "F",
      "name": "Amanda",
      "n": 379,
      "prop": 0.000322649299791427
    },
    {
      "year": 1919,
      "sex": "F",
      "name": "Linda",
      "n": 282,
      "prop": 0.000240071510662751
    },
    {
      "year": 1919,
      "sex": "F",
      "name": "Deborah",
      "n": 70,
      "prop": 0.0000595922189588388
    },
    {
      "year": 1919,
      "sex": "F",
      "name": "Jessica",
      "n": 40,
      "prop": 0.0000340526965479079
    },
    {
      "year": 1920,
      "sex": "F",
      "name": "Dorothy",
      "n": 36645,
      "prop": 0.0294564957018998
    },
    {
      "year": 1920,
      "sex": "F",
      "name": "Helen",
      "n": 35098,
      "prop": 0.0282129645557451
    },
    {
      "year": 1920,
      "sex": "F",
      "name": "Betty",
      "n": 14017,
      "prop": 0.011267340708242
    },
    {
      "year": 1920,
      "sex": "F",
      "name": "Patricia",
      "n": 2502,
      "prop": 0.00201119258414936
    },
    {
      "year": 1920,
      "sex": "F",
      "name": "Amanda",
      "n": 379,
      "prop": 0.000304653073298404
    },
    {
      "year": 1920,
      "sex": "F",
      "name": "Linda",
      "n": 349,
      "prop": 0.000280538054303807
    },
    {
      "year": 1920,
      "sex": "F",
      "name": "Deborah",
      "n": 82,
      "prop": 0.0000659143852518974
    },
    {
      "year": 1920,
      "sex": "F",
      "name": "Jessica",
      "n": 43,
      "prop": 0.0000345648605589218
    },
    {
      "year": 1921,
      "sex": "F",
      "name": "Dorothy",
      "n": 39083,
      "prop": 0.0305412051909812
    },
    {
      "year": 1921,
      "sex": "F",
      "name": "Helen",
      "n": 34819,
      "prop": 0.0272091247740648
    },
    {
      "year": 1921,
      "sex": "F",
      "name": "Betty",
      "n": 17637,
      "prop": 0.013782341067813
    },
    {
      "year": 1921,
      "sex": "F",
      "name": "Patricia",
      "n": 3382,
      "prop": 0.00264284614681315
    },
    {
      "year": 1921,
      "sex": "F",
      "name": "Amanda",
      "n": 392,
      "prop": 0.000306326342268112
    },
    {
      "year": 1921,
      "sex": "F",
      "name": "Linda",
      "n": 367,
      "prop": 0.000286790223501013
    },
    {
      "year": 1921,
      "sex": "F",
      "name": "Deborah",
      "n": 94,
      "prop": 0.0000734558065642922
    },
    {
      "year": 1921,
      "sex": "F",
      "name": "Jessica",
      "n": 48,
      "prop": 0.0000375093480328301
    },
    {
      "year": 1922,
      "sex": "F",
      "name": "Dorothy",
      "n": 37711,
      "prop": 0.0302285073477132
    },
    {
      "year": 1922,
      "sex": "F",
      "name": "Helen",
      "n": 32507,
      "prop": 0.0260570679205567
    },
    {
      "year": 1922,
      "sex": "F",
      "name": "Betty",
      "n": 20893,
      "prop": 0.0167474796217489
    },
    {
      "year": 1922,
      "sex": "F",
      "name": "Patricia",
      "n": 3902,
      "prop": 0.00312777798708008
    },
    {
      "year": 1922,
      "sex": "F",
      "name": "Linda",
      "n": 365,
      "prop": 0.000292577899867819
    },
    {
      "year": 1922,
      "sex": "F",
      "name": "Amanda",
      "n": 341,
      "prop": 0.000273339900972401
    },
    {
      "year": 1922,
      "sex": "F",
      "name": "Deborah",
      "n": 71,
      "prop": 0.0000569124133989456
    },
    {
      "year": 1922,
      "sex": "F",
      "name": "Jessica",
      "n": 40,
      "prop": 0.0000320633314923637
    },
    {
      "year": 1923,
      "sex": "F",
      "name": "Dorothy",
      "n": 39045,
      "prop": 0.0311757435229189
    },
    {
      "year": 1923,
      "sex": "F",
      "name": "Helen",
      "n": 31492,
      "prop": 0.0251449997444938
    },
    {
      "year": 1923,
      "sex": "F",
      "name": "Betty",
      "n": 25990,
      "prop": 0.020751890745567
    },
    {
      "year": 1923,
      "sex": "F",
      "name": "Patricia",
      "n": 4800,
      "prop": 0.00383259236547601
    },
    {
      "year": 1923,
      "sex": "F",
      "name": "Linda",
      "n": 423,
      "prop": 0.000337747202207573
    },
    {
      "year": 1923,
      "sex": "F",
      "name": "Amanda",
      "n": 362,
      "prop": 0.000289041340896316
    },
    {
      "year": 1923,
      "sex": "F",
      "name": "Deborah",
      "n": 118,
      "prop": 0.0000942178956512852
    },
    {
      "year": 1923,
      "sex": "F",
      "name": "Jessica",
      "n": 52,
      "prop": 0.0000415197506259901
    },
    {
      "year": 1924,
      "sex": "F",
      "name": "Dorothy",
      "n": 39996,
      "prop": 0.0308678753677503
    },
    {
      "year": 1924,
      "sex": "F",
      "name": "Helen",
      "n": 31193,
      "prop": 0.0240739483034863
    },
    {
      "year": 1924,
      "sex": "F",
      "name": "Betty",
      "n": 30602,
      "prop": 0.0236178298330807
    },
    {
      "year": 1924,
      "sex": "F",
      "name": "Patricia",
      "n": 6958,
      "prop": 0.00537000392061223
    },
    {
      "year": 1924,
      "sex": "F",
      "name": "Linda",
      "n": 454,
      "prop": 0.000350385423966363
    },
    {
      "year": 1924,
      "sex": "F",
      "name": "Amanda",
      "n": 341,
      "prop": 0.000263174955005572
    },
    {
      "year": 1924,
      "sex": "F",
      "name": "Deborah",
      "n": 125,
      "prop": 0.0000964717576999898
    },
    {
      "year": 1924,
      "sex": "F",
      "name": "Jessica",
      "n": 41,
      "prop": 0.0000316427365255967
    },
    {
      "year": 1925,
      "sex": "F",
      "name": "Dorothy",
      "n": 38572,
      "prop": 0.030538871901736
    },
    {
      "year": 1925,
      "sex": "F",
      "name": "Betty",
      "n": 32817,
      "prop": 0.0259824266099572
    },
    {
      "year": 1925,
      "sex": "F",
      "name": "Helen",
      "n": 29168,
      "prop": 0.023093379021825
    },
    {
      "year": 1925,
      "sex": "F",
      "name": "Patricia",
      "n": 8095,
      "prop": 0.00640910940694163
    },
    {
      "year": 1925,
      "sex": "F",
      "name": "Linda",
      "n": 438,
      "prop": 0.000346780718992024
    },
    {
      "year": 1925,
      "sex": "F",
      "name": "Amanda",
      "n": 310,
      "prop": 0.000245438408419012
    },
    {
      "year": 1925,
      "sex": "F",
      "name": "Deborah",
      "n": 82,
      "prop": 0.0000649224177108356
    },
    {
      "year": 1925,
      "sex": "F",
      "name": "Jessica",
      "n": 34,
      "prop": 0.0000269190512459562
    },
    {
      "year": 1926,
      "sex": "F",
      "name": "Dorothy",
      "n": 36614,
      "prop": 0.0297646484033633
    },
    {
      "year": 1926,
      "sex": "F",
      "name": "Betty",
      "n": 32959,
      "prop": 0.026793386320163
    },
    {
      "year": 1926,
      "sex": "F",
      "name": "Helen",
      "n": 26884,
      "prop": 0.0218548316948713
    },
    {
      "year": 1926,
      "sex": "F",
      "name": "Patricia",
      "n": 8590,
      "prop": 0.0069830755936224
    },
    {
      "year": 1926,
      "sex": "F",
      "name": "Linda",
      "n": 479,
      "prop": 0.000389393854405719
    },
    {
      "year": 1926,
      "sex": "F",
      "name": "Amanda",
      "n": 310,
      "prop": 0.000252008548780319
    },
    {
      "year": 1926,
      "sex": "F",
      "name": "Deborah",
      "n": 116,
      "prop": 0.0000942999730919904
    },
    {
      "year": 1926,
      "sex": "F",
      "name": "Jessica",
      "n": 35,
      "prop": 0.0000284525780881006
    },
    {
      "year": 1927,
      "sex": "F",
      "name": "Dorothy",
      "n": 35987,
      "prop": 0.0291075004772119
    },
    {
      "year": 1927,
      "sex": "F",
      "name": "Betty",
      "n": 35422,
      "prop": 0.0286505094035013
    },
    {
      "year": 1927,
      "sex": "F",
      "name": "Helen",
      "n": 25316,
      "prop": 0.0204764354372717
    },
    {
      "year": 1927,
      "sex": "F",
      "name": "Patricia",
      "n": 10553,
      "prop": 0.00853562265640418
    },
    {
      "year": 1927,
      "sex": "F",
      "name": "Linda",
      "n": 516,
      "prop": 0.000417358219530423
    },
    {
      "year": 1927,
      "sex": "F",
      "name": "Amanda",
      "n": 234,
      "prop": 0.000189267099554494
    },
    {
      "year": 1927,
      "sex": "F",
      "name": "Deborah",
      "n": 91,
      "prop": 0.00007360387204897
    },
    {
      "year": 1927,
      "sex": "F",
      "name": "Jessica",
      "n": 39,
      "prop": 0.0000315445165924157
    },
    {
      "year": 1928,
      "sex": "F",
      "name": "Betty",
      "n": 36078,
      "prop": 0.0301810713703117
    },
    {
      "year": 1928,
      "sex": "F",
      "name": "Dorothy",
      "n": 33728,
      "prop": 0.0282151775369442
    },
    {
      "year": 1928,
      "sex": "F",
      "name": "Helen",
      "n": 22936,
      "prop": 0.0191871238136667
    },
    {
      "year": 1928,
      "sex": "F",
      "name": "Patricia",
      "n": 12332,
      "prop": 0.0103163415970587
    },
    {
      "year": 1928,
      "sex": "F",
      "name": "Linda",
      "n": 554,
      "prop": 0.000463449014334294
    },
    {
      "year": 1928,
      "sex": "F",
      "name": "Amanda",
      "n": 247,
      "prop": 0.000206627990145434
    },
    {
      "year": 1928,
      "sex": "F",
      "name": "Deborah",
      "n": 130,
      "prop": 0.000108751573760755
    },
    {
      "year": 1928,
      "sex": "F",
      "name": "Jessica",
      "n": 36,
      "prop": 0.0000301158204260552
    },
    {
      "year": 1929,
      "sex": "F",
      "name": "Betty",
      "n": 36669,
      "prop": 0.0316800016587745
    },
    {
      "year": 1929,
      "sex": "F",
      "name": "Dorothy",
      "n": 31477,
      "prop": 0.0271943988713422
    },
    {
      "year": 1929,
      "sex": "F",
      "name": "Helen",
      "n": 20983,
      "prop": 0.0181281593391166
    },
    {
      "year": 1929,
      "sex": "F",
      "name": "Patricia",
      "n": 13626,
      "prop": 0.0117721154818092
    },
    {
      "year": 1929,
      "sex": "F",
      "name": "Linda",
      "n": 509,
      "prop": 0.000439748039060684
    },
    {
      "year": 1929,
      "sex": "F",
      "name": "Amanda",
      "n": 209,
      "prop": 0.000180564518985625
    },
    {
      "year": 1929,
      "sex": "F",
      "name": "Deborah",
      "n": 161,
      "prop": 0.000139095155773615
    },
    {
      "year": 1929,
      "sex": "F",
      "name": "Jessica",
      "n": 42,
      "prop": 0.0000362856928105083
    },
    {
      "year": 1930,
      "sex": "F",
      "name": "Betty",
      "n": 38239,
      "prop": 0.0327853532062582
    },
    {
      "year": 1930,
      "sex": "F",
      "name": "Dorothy",
      "n": 30404,
      "prop": 0.0260677810320111
    },
    {
      "year": 1930,
      "sex": "F",
      "name": "Helen",
      "n": 19914,
      "prop": 0.0170738650003772
    },
    {
      "year": 1930,
      "sex": "F",
      "name": "Patricia",
      "n": 15749,
      "prop": 0.0135028773672261
    },
    {
      "year": 1930,
      "sex": "F",
      "name": "Linda",
      "n": 493,
      "prop": 0.000422688332087274
    },
    {
      "year": 1930,
      "sex": "F",
      "name": "Amanda",
      "n": 196,
      "prop": 0.00016804647685417
    },
    {
      "year": 1930,
      "sex": "F",
      "name": "Deborah",
      "n": 165,
      "prop": 0.000141467697351725
    },
    {
      "year": 1930,
      "sex": "F",
      "name": "Jessica",
      "n": 38,
      "prop": 0.0000325804393900942
    },
    {
      "year": 1931,
      "sex": "F",
      "name": "Betty",
      "n": 36102,
      "prop": 0.0327140362625423
    },
    {
      "year": 1931,
      "sex": "F",
      "name": "Dorothy",
      "n": 26521,
      "prop": 0.0240321576566086
    },
    {
      "year": 1931,
      "sex": "F",
      "name": "Helen",
      "n": 17657,
      "prop": 0.0159999927507537
    },
    {
      "year": 1931,
      "sex": "F",
      "name": "Patricia",
      "n": 16468,
      "prop": 0.0149225735186845
    },
    {
      "year": 1931,
      "sex": "F",
      "name": "Linda",
      "n": 534,
      "prop": 0.000483887190853626
    },
    {
      "year": 1931,
      "sex": "F",
      "name": "Amanda",
      "n": 209,
      "prop": 0.00018938655971612
    },
    {
      "year": 1931,
      "sex": "F",
      "name": "Deborah",
      "n": 158,
      "prop": 0.000143172614522234
    },
    {
      "year": 1931,
      "sex": "F",
      "name": "Jessica",
      "n": 39,
      "prop": 0.0000353400757365008
    },
    {
      "year": 1932,
      "sex": "F",
      "name": "Betty",
      "n": 34411,
      "prop": 0.0311083227035339
    },
    {
      "year": 1932,
      "sex": "F",
      "name": "Dorothy",
      "n": 24968,
      "prop": 0.0225716370132177
    },
    {
      "year": 1932,
      "sex": "F",
      "name": "Patricia",
      "n": 17991,
      "prop": 0.0162642711272349
    },
    {
      "year": 1932,
      "sex": "F",
      "name": "Helen",
      "n": 16375,
      "prop": 0.0148033705579718
    },
    {
      "year": 1932,
      "sex": "F",
      "name": "Linda",
      "n": 774,
      "prop": 0.000699713515228713
    },
    {
      "year": 1932,
      "sex": "F",
      "name": "Amanda",
      "n": 213,
      "prop": 0.00019255682008232
    },
    {
      "year": 1932,
      "sex": "F",
      "name": "Deborah",
      "n": 208,
      "prop": 0.000188036706934848
    },
    {
      "year": 1932,
      "sex": "F",
      "name": "Jessica",
      "n": 44,
      "prop": 0.0000397769956977563
    },
    {
      "year": 1933,
      "sex": "F",
      "name": "Betty",
      "n": 31526,
      "prop": 0.0301434985810775
    },
    {
      "year": 1933,
      "sex": "F",
      "name": "Dorothy",
      "n": 22050,
      "prop": 0.0210830471265862
    },
    {
      "year": 1933,
      "sex": "F",
      "name": "Patricia",
      "n": 18625,
      "prop": 0.017808242754316
    },
    {
      "year": 1933,
      "sex": "F",
      "name": "Helen",
      "n": 14645,
      "prop": 0.0140027766516488
    },
    {
      "year": 1933,
      "sex": "F",
      "name": "Linda",
      "n": 786,
      "prop": 0.000751531747913687
    },
    {
      "year": 1933,
      "sex": "F",
      "name": "Deborah",
      "n": 243,
      "prop": 0.000232343784660338
    },
    {
      "year": 1933,
      "sex": "F",
      "name": "Amanda",
      "n": 199,
      "prop": 0.000190273305133363
    },
    {
      "year": 1933,
      "sex": "F",
      "name": "Jessica",
      "n": 43,
      "prop": 0.0000411143322649981
    },
    {
      "year": 1934,
      "sex": "F",
      "name": "Betty",
      "n": 31078,
      "prop": 0.0287181174191951
    },
    {
      "year": 1934,
      "sex": "F",
      "name": "Dorothy",
      "n": 21280,
      "prop": 0.0196641205573226
    },
    {
      "year": 1934,
      "sex": "F",
      "name": "Patricia",
      "n": 20847,
      "prop": 0.0192640000591402
    },
    {
      "year": 1934,
      "sex": "F",
      "name": "Helen",
      "n": 14099,
      "prop": 0.0130284039350419
    },
    {
      "year": 1934,
      "sex": "F",
      "name": "Linda",
      "n": 1001,
      "prop": 0.000924989881479318
    },
    {
      "year": 1934,
      "sex": "F",
      "name": "Deborah",
      "n": 280,
      "prop": 0.000258738428385823
    },
    {
      "year": 1934,
      "sex": "F",
      "name": "Amanda",
      "n": 189,
      "prop": 0.000174648439160431
    },
    {
      "year": 1934,
      "sex": "F",
      "name": "Jessica",
      "n": 46,
      "prop": 0.0000425070275205281
    },
    {
      "year": 1935,
      "sex": "F",
      "name": "Betty",
      "n": 28673,
      "prop": 0.0263859454097216
    },
    {
      "year": 1935,
      "sex": "F",
      "name": "Patricia",
      "n": 22876,
      "prop": 0.0210513335609385
    },
    {
      "year": 1935,
      "sex": "F",
      "name": "Dorothy",
      "n": 19400,
      "prop": 0.0178525909722944
    },
    {
      "year": 1935,
      "sex": "F",
      "name": "Helen",
      "n": 12778,
      "prop": 0.0117587838888649
    },
    {
      "year": 1935,
      "sex": "F",
      "name": "Linda",
      "n": 1197,
      "prop": 0.00110152326772353
    },
    {
      "year": 1935,
      "sex": "F",
      "name": "Deborah",
      "n": 279,
      "prop": 0.00025674602480774
    },
    {
      "year": 1935,
      "sex": "F",
      "name": "Amanda",
      "n": 211,
      "prop": 0.000194169932739903
    },
    {
      "year": 1935,
      "sex": "F",
      "name": "Jessica",
      "n": 47,
      "prop": 0.0000432511224586515
    },
    {
      "year": 1936,
      "sex": "F",
      "name": "Betty",
      "n": 25863,
      "prop": 0.0240043659489396
    },
    {
      "year": 1936,
      "sex": "F",
      "name": "Patricia",
      "n": 23912,
      "prop": 0.022193573776091
    },
    {
      "year": 1936,
      "sex": "F",
      "name": "Dorothy",
      "n": 17668,
      "prop": 0.0163982963146528
    },
    {
      "year": 1936,
      "sex": "F",
      "name": "Helen",
      "n": 12232,
      "prop": 0.0113529522594992
    },
    {
      "year": 1936,
      "sex": "F",
      "name": "Linda",
      "n": 2439,
      "prop": 0.0022637222499116
    },
    {
      "year": 1936,
      "sex": "F",
      "name": "Deborah",
      "n": 299,
      "prop": 0.00027751248574152
    },
    {
      "year": 1936,
      "sex": "F",
      "name": "Amanda",
      "n": 192,
      "prop": 0.000178201997533016
    },
    {
      "year": 1936,
      "sex": "F",
      "name": "Jessica",
      "n": 43,
      "prop": 0.0000399098223641651
    },
    {
      "year": 1937,
      "sex": "F",
      "name": "Patricia",
      "n": 26837,
      "prop": 0.0243591174914203
    },
    {
      "year": 1937,
      "sex": "F",
      "name": "Betty",
      "n": 25328,
      "prop": 0.0229894447152324
    },
    {
      "year": 1937,
      "sex": "F",
      "name": "Dorothy",
      "n": 16571,
      "prop": 0.0150409858013312
    },
    {
      "year": 1937,
      "sex": "F",
      "name": "Helen",
      "n": 11452,
      "prop": 0.0103946273246542
    },
    {
      "year": 1937,
      "sex": "F",
      "name": "Linda",
      "n": 4380,
      "prop": 0.00397559096070428
    },
    {
      "year": 1937,
      "sex": "F",
      "name": "Deborah",
      "n": 323,
      "prop": 0.000293177141622713
    },
    {
      "year": 1937,
      "sex": "F",
      "name": "Amanda",
      "n": 176,
      "prop": 0.00015974977376346
    },
    {
      "year": 1937,
      "sex": "F",
      "name": "Jessica",
      "n": 72,
      "prop": 0.0000653521801759607
    },
    {
      "year": 1938,
      "sex": "F",
      "name": "Patricia",
      "n": 27555,
      "prop": 0.0241429070846355
    },
    {
      "year": 1938,
      "sex": "F",
      "name": "Betty",
      "n": 25502,
      "prop": 0.0223441268906687
    },
    {
      "year": 1938,
      "sex": "F",
      "name": "Dorothy",
      "n": 16348,
      "prop": 0.0143236525138676
    },
    {
      "year": 1938,
      "sex": "F",
      "name": "Helen",
      "n": 10833,
      "prop": 0.00949156641073696
    },
    {
      "year": 1938,
      "sex": "F",
      "name": "Linda",
      "n": 7047,
      "prop": 0.00617438091908643
    },
    {
      "year": 1938,
      "sex": "F",
      "name": "Deborah",
      "n": 410,
      "prop": 0.000359230335862841
    },
    {
      "year": 1938,
      "sex": "F",
      "name": "Amanda",
      "n": 192,
      "prop": 0.000168224937769916
    },
    {
      "year": 1938,
      "sex": "F",
      "name": "Jessica",
      "n": 50,
      "prop": 0.0000438085775442489
    },
    {
      "year": 1938,
      "sex": "F",
      "name": "Ashley",
      "n": 7,
      "prop": 0.00000613320085619484
    },
    {
      "year": 1939,
      "sex": "F",
      "name": "Patricia",
      "n": 29704,
      "prop": 0.0261941652197148
    },
    {
      "year": 1939,
      "sex": "F",
      "name": "Betty",
      "n": 23639,
      "prop": 0.0208458076901709
    },
    {
      "year": 1939,
      "sex": "F",
      "name": "Dorothy",
      "n": 15170,
      "prop": 0.0133775076212993
    },
    {
      "year": 1939,
      "sex": "F",
      "name": "Linda",
      "n": 10714,
      "prop": 0.00944803010247859
    },
    {
      "year": 1939,
      "sex": "F",
      "name": "Helen",
      "n": 10417,
      "prop": 0.00918612372386778
    },
    {
      "year": 1939,
      "sex": "F",
      "name": "Deborah",
      "n": 443,
      "prop": 0.000390654968769648
    },
    {
      "year": 1939,
      "sex": "F",
      "name": "Amanda",
      "n": 185,
      "prop": 0.000163140336845113
    },
    {
      "year": 1939,
      "sex": "F",
      "name": "Jessica",
      "n": 77,
      "prop": 0.0000679016537139118
    },
    {
      "year": 1940,
      "sex": "F",
      "name": "Patricia",
      "n": 32661,
      "prop": 0.027650413304301
    },
    {
      "year": 1940,
      "sex": "F",
      "name": "Betty",
      "n": 22074,
      "prop": 0.0186875852937491
    },
    {
      "year": 1940,
      "sex": "F",
      "name": "Linda",
      "n": 18368,
      "prop": 0.0155501298666116
    },
    {
      "year": 1940,
      "sex": "F",
      "name": "Dorothy",
      "n": 14874,
      "prop": 0.0125921511125861
    },
    {
      "year": 1940,
      "sex": "F",
      "name": "Helen",
      "n": 10201,
      "prop": 0.00863604501139508
    },
    {
      "year": 1940,
      "sex": "F",
      "name": "Deborah",
      "n": 469,
      "prop": 0.000397049809856317
    },
    {
      "year": 1940,
      "sex": "F",
      "name": "Amanda",
      "n": 218,
      "prop": 0.000184556201596326
    },
    {
      "year": 1940,
      "sex": "F",
      "name": "Jessica",
      "n": 61,
      "prop": 0.0000516418729237427
    },
    {
      "year": 1941,
      "sex": "F",
      "name": "Patricia",
      "n": 36901,
      "prop": 0.0296201340816562
    },
    {
      "year": 1941,
      "sex": "F",
      "name": "Linda",
      "n": 23715,
      "prop": 0.0190358385882897
    },
    {
      "year": 1941,
      "sex": "F",
      "name": "Betty",
      "n": 20900,
      "prop": 0.0167762608684484
    },
    {
      "year": 1941,
      "sex": "F",
      "name": "Dorothy",
      "n": 14561,
      "prop": 0.0116879968662908
    },
    {
      "year": 1941,
      "sex": "F",
      "name": "Helen",
      "n": 9889,
      "prop": 0.00793782027407113
    },
    {
      "year": 1941,
      "sex": "F",
      "name": "Deborah",
      "n": 608,
      "prop": 0.000488036679809409
    },
    {
      "year": 1941,
      "sex": "F",
      "name": "Amanda",
      "n": 223,
      "prop": 0.000179000295390622
    },
    {
      "year": 1941,
      "sex": "F",
      "name": "Jessica",
      "n": 81,
      "prop": 0.0000650180445140824
    },
    {
      "year": 1941,
      "sex": "F",
      "name": "Ashley",
      "n": 6,
      "prop": 0.00000481615144548759
    },
    {
      "year": 1942,
      "sex": "F",
      "name": "Patricia",
      "n": 39454,
      "prop": 0.0283767212206867
    },
    {
      "year": 1942,
      "sex": "F",
      "name": "Linda",
      "n": 31611,
      "prop": 0.0227357564380576
    },
    {
      "year": 1942,
      "sex": "F",
      "name": "Betty",
      "n": 21654,
      "prop": 0.0155743276046218
    },
    {
      "year": 1942,
      "sex": "F",
      "name": "Dorothy",
      "n": 15032,
      "prop": 0.0108115494852071
    },
    {
      "year": 1942,
      "sex": "F",
      "name": "Helen",
      "n": 10013,
      "prop": 0.00720170602683468
    },
    {
      "year": 1942,
      "sex": "F",
      "name": "Deborah",
      "n": 676,
      "prop": 0.000486203263171901
    },
    {
      "year": 1942,
      "sex": "F",
      "name": "Amanda",
      "n": 295,
      "prop": 0.000212174500940401
    },
    {
      "year": 1942,
      "sex": "F",
      "name": "Jessica",
      "n": 127,
      "prop": 0.0000913429207438335
    },
    {
      "year": 1942,
      "sex": "F",
      "name": "Ashley",
      "n": 8,
      "prop": 0.0000057538847712651
    },
    {
      "year": 1943,
      "sex": "F",
      "name": "Patricia",
      "n": 39620,
      "prop": 0.0276053892520138
    },
    {
      "year": 1943,
      "sex": "F",
      "name": "Linda",
      "n": 38437,
      "prop": 0.0267811293962558
    },
    {
      "year": 1943,
      "sex": "F",
      "name": "Betty",
      "n": 21595,
      "prop": 0.0150464003255234
    },
    {
      "year": 1943,
      "sex": "F",
      "name": "Dorothy",
      "n": 14785,
      "prop": 0.0103015063122419
    },
    {
      "year": 1943,
      "sex": "F",
      "name": "Helen",
      "n": 9799,
      "prop": 0.00682749140031507
    },
    {
      "year": 1943,
      "sex": "F",
      "name": "Deborah",
      "n": 788,
      "prop": 0.000549042067909815
    },
    {
      "year": 1943,
      "sex": "F",
      "name": "Amanda",
      "n": 284,
      "prop": 0.000197878105693385
    },
    {
      "year": 1943,
      "sex": "F",
      "name": "Jessica",
      "n": 121,
      "prop": 0.0000843072210876746
    },
    {
      "year": 1943,
      "sex": "F",
      "name": "Ashley",
      "n": 10,
      "prop": 0.00000696753893286567
    },
    {
      "year": 1944,
      "sex": "F",
      "name": "Linda",
      "n": 38411,
      "prop": 0.0281104982403037
    },
    {
      "year": 1944,
      "sex": "F",
      "name": "Patricia",
      "n": 36872,
      "prop": 0.0269842048141543
    },
    {
      "year": 1944,
      "sex": "F",
      "name": "Betty",
      "n": 19757,
      "prop": 0.0144588558937201
    },
    {
      "year": 1944,
      "sex": "F",
      "name": "Dorothy",
      "n": 13378,
      "prop": 0.00979048307669114
    },
    {
      "year": 1944,
      "sex": "F",
      "name": "Helen",
      "n": 8693,
      "prop": 0.00636183804647003
    },
    {
      "year": 1944,
      "sex": "F",
      "name": "Deborah",
      "n": 1293,
      "prop": 0.000946262118265933
    },
    {
      "year": 1944,
      "sex": "F",
      "name": "Amanda",
      "n": 238,
      "prop": 0.000174176631204402
    },
    {
      "year": 1944,
      "sex": "F",
      "name": "Jessica",
      "n": 124,
      "prop": 0.0000907474885266633
    },
    {
      "year": 1944,
      "sex": "F",
      "name": "Ashley",
      "n": 12,
      "prop": 0.00000878201501870935
    },
    {
      "year": 1945,
      "sex": "F",
      "name": "Linda",
      "n": 41464,
      "prop": 0.0308041820109342
    },
    {
      "year": 1945,
      "sex": "F",
      "name": "Patricia",
      "n": 35840,
      "prop": 0.0266260342290151
    },
    {
      "year": 1945,
      "sex": "F",
      "name": "Betty",
      "n": 18383,
      "prop": 0.0136569862508924
    },
    {
      "year": 1945,
      "sex": "F",
      "name": "Dorothy",
      "n": 12328,
      "prop": 0.00915864257743577
    },
    {
      "year": 1945,
      "sex": "F",
      "name": "Helen",
      "n": 8300,
      "prop": 0.00616618538227749
    },
    {
      "year": 1945,
      "sex": "F",
      "name": "Deborah",
      "n": 1464,
      "prop": 0.00108762595176557
    },
    {
      "year": 1945,
      "sex": "F",
      "name": "Amanda",
      "n": 280,
      "prop": 0.00020801589241418
    },
    {
      "year": 1945,
      "sex": "F",
      "name": "Jessica",
      "n": 132,
      "prop": 0.0000980646349952565
    },
    {
      "year": 1945,
      "sex": "F",
      "name": "Ashley",
      "n": 10,
      "prop": 0.00000742913901479216
    },
    {
      "year": 1946,
      "sex": "F",
      "name": "Linda",
      "n": 52708,
      "prop": 0.0326804234293612
    },
    {
      "year": 1946,
      "sex": "F",
      "name": "Patricia",
      "n": 46295,
      "prop": 0.028704185373421
    },
    {
      "year": 1946,
      "sex": "F",
      "name": "Betty",
      "n": 19714,
      "prop": 0.012223227356121
    },
    {
      "year": 1946,
      "sex": "F",
      "name": "Dorothy",
      "n": 12796,
      "prop": 0.00793387527893499
    },
    {
      "year": 1946,
      "sex": "F",
      "name": "Helen",
      "n": 8852,
      "prop": 0.00548848577439298
    },
    {
      "year": 1946,
      "sex": "F",
      "name": "Deborah",
      "n": 2470,
      "prop": 0.00153146857916297
    },
    {
      "year": 1946,
      "sex": "F",
      "name": "Amanda",
      "n": 274,
      "prop": 0.000169887607567067
    },
    {
      "year": 1946,
      "sex": "F",
      "name": "Jessica",
      "n": 240,
      "prop": 0.000148806663562394
    },
    {
      "year": 1946,
      "sex": "F",
      "name": "Ashley",
      "n": 7,
      "prop": 0.00000434019435390317
    },
    {
      "year": 1947,
      "sex": "F",
      "name": "Linda",
      "n": 99680,
      "prop": 0.0548360886157353
    },
    {
      "year": 1947,
      "sex": "F",
      "name": "Patricia",
      "n": 51274,
      "prop": 0.0282069182151205
    },
    {
      "year": 1947,
      "sex": "F",
      "name": "Betty",
      "n": 18962,
      "prop": 0.0104313996020423
    },
    {
      "year": 1947,
      "sex": "F",
      "name": "Dorothy",
      "n": 12751,
      "prop": 0.00701459636776927
    },
    {
      "year": 1947,
      "sex": "F",
      "name": "Helen",
      "n": 8978,
      "prop": 0.00493898880008098
    },
    {
      "year": 1947,
      "sex": "F",
      "name": "Deborah",
      "n": 5838,
      "prop": 0.00321160799898338
    },
    {
      "year": 1947,
      "sex": "F",
      "name": "Jessica",
      "n": 430,
      "prop": 0.000236552147921009
    },
    {
      "year": 1947,
      "sex": "F",
      "name": "Amanda",
      "n": 310,
      "prop": 0.000170537595012821
    },
    {
      "year": 1947,
      "sex": "F",
      "name": "Ashley",
      "n": 11,
      "prop": 0.00000605133401658396
    },
    {
      "year": 1948,
      "sex": "F",
      "name": "Linda",
      "n": 96211,
      "prop": 0.0552115905834257
    },
    {
      "year": 1948,
      "sex": "F",
      "name": "Patricia",
      "n": 46135,
      "prop": 0.0264750052651604
    },
    {
      "year": 1948,
      "sex": "F",
      "name": "Betty",
      "n": 16622,
      "prop": 0.00953869161195395
    },
    {
      "year": 1948,
      "sex": "F",
      "name": "Dorothy",
      "n": 11326,
      "prop": 0.00649953201762667
    },
    {
      "year": 1948,
      "sex": "F",
      "name": "Deborah",
      "n": 11246,
      "prop": 0.00645362326242535
    },
    {
      "year": 1948,
      "sex": "F",
      "name": "Helen",
      "n": 8305,
      "prop": 0.00476590264933688
    },
    {
      "year": 1948,
      "sex": "F",
      "name": "Jessica",
      "n": 482,
      "prop": 0.000276600250087944
    },
    {
      "year": 1948,
      "sex": "F",
      "name": "Amanda",
      "n": 306,
      "prop": 0.000175600988645043
    },
    {
      "year": 1948,
      "sex": "F",
      "name": "Ashley",
      "n": 13,
      "prop": 0.00000746017272021426
    },
    {
      "year": 1949,
      "sex": "F",
      "name": "Linda",
      "n": 91010,
      "prop": 0.0518428093664536
    },
    {
      "year": 1949,
      "sex": "F",
      "name": "Patricia",
      "n": 46337,
      "prop": 0.0263953440019049
    },
    {
      "year": 1949,
      "sex": "F",
      "name": "Deborah",
      "n": 19208,
      "prop": 0.0109416183090962
    },
    {
      "year": 1949,
      "sex": "F",
      "name": "Betty",
      "n": 14946,
      "prop": 0.00851381857807951
    },
    {
      "year": 1949,
      "sex": "F",
      "name": "Dorothy",
      "n": 10406,
      "prop": 0.00592765931510072
    },
    {
      "year": 1949,
      "sex": "F",
      "name": "Helen",
      "n": 7709,
      "prop": 0.00439134399962632
    },
    {
      "year": 1949,
      "sex": "F",
      "name": "Jessica",
      "n": 406,
      "prop": 0.000231273273297222
    },
    {
      "year": 1949,
      "sex": "F",
      "name": "Amanda",
      "n": 333,
      "prop": 0.000189689655192056
    },
    {
      "year": 1949,
      "sex": "F",
      "name": "Ashley",
      "n": 11,
      "prop": 0.00000626602464598385
    },
    {
      "year": 1950,
      "sex": "F",
      "name": "Linda",
      "n": 80439,
      "prop": 0.0457319621154536
    },
    {
      "year": 1950,
      "sex": "F",
      "name": "Patricia",
      "n": 47952,
      "prop": 0.0272621371145866
    },
    {
      "year": 1950,
      "sex": "F",
      "name": "Deborah",
      "n": 29073,
      "prop": 0.0165288645381293
    },
    {
      "year": 1950,
      "sex": "F",
      "name": "Betty",
      "n": 13614,
      "prop": 0.00773996360272735
    },
    {
      "year": 1950,
      "sex": "F",
      "name": "Dorothy",
      "n": 9555,
      "prop": 0.00543230147084324
    },
    {
      "year": 1950,
      "sex": "F",
      "name": "Helen",
      "n": 7060,
      "prop": 0.0040138198204242
    },
    {
      "year": 1950,
      "sex": "F",
      "name": "Jessica",
      "n": 402,
      "prop": 0.000228548947281945
    },
    {
      "year": 1950,
      "sex": "F",
      "name": "Amanda",
      "n": 379,
      "prop": 0.000215472763730988
    },
    {
      "year": 1950,
      "sex": "F",
      "name": "Ashley",
      "n": 15,
      "prop": 0.00000852794579410241
    },
    {
      "year": 1951,
      "sex": "F",
      "name": "Linda",
      "n": 73947,
      "prop": 0.0400434945769865
    },
    {
      "year": 1951,
      "sex": "F",
      "name": "Patricia",
      "n": 56433,
      "prop": 0.0305593807654547
    },
    {
      "year": 1951,
      "sex": "F",
      "name": "Deborah",
      "n": 42045,
      "prop": 0.0227680464317606
    },
    {
      "year": 1951,
      "sex": "F",
      "name": "Betty",
      "n": 12820,
      "prop": 0.00694223701403664
    },
    {
      "year": 1951,
      "sex": "F",
      "name": "Dorothy",
      "n": 9082,
      "prop": 0.00491804965378165
    },
    {
      "year": 1951,
      "sex": "F",
      "name": "Helen",
      "n": 6945,
      "prop": 0.00376082964605963
    },
    {
      "year": 1951,
      "sex": "F",
      "name": "Jessica",
      "n": 466,
      "prop": 0.000252346524847198
    },
    {
      "year": 1951,
      "sex": "F",
      "name": "Amanda",
      "n": 409,
      "prop": 0.000221480104425974
    },
    {
      "year": 1951,
      "sex": "F",
      "name": "Ashley",
      "n": 15,
      "prop": 0.00000812274221611151
    },
    {
      "year": 1952,
      "sex": "F",
      "name": "Linda",
      "n": 67092,
      "prop": 0.0352717589878795
    },
    {
      "year": 1952,
      "sex": "F",
      "name": "Patricia",
      "n": 53090,
      "prop": 0.0279105956696256
    },
    {
      "year": 1952,
      "sex": "F",
      "name": "Deborah",
      "n": 49809,
      "prop": 0.0261857008797962
    },
    {
      "year": 1952,
      "sex": "F",
      "name": "Betty",
      "n": 12125,
      "prop": 0.00637438260490131
    },
    {
      "year": 1952,
      "sex": "F",
      "name": "Dorothy",
      "n": 8608,
      "prop": 0.00452541735777241
    },
    {
      "year": 1952,
      "sex": "F",
      "name": "Helen",
      "n": 6470,
      "prop": 0.00340142313020301
    },
    {
      "year": 1952,
      "sex": "F",
      "name": "Jessica",
      "n": 452,
      "prop": 0.000237626469065187
    },
    {
      "year": 1952,
      "sex": "F",
      "name": "Amanda",
      "n": 418,
      "prop": 0.000219751911657629
    },
    {
      "year": 1952,
      "sex": "F",
      "name": "Ashley",
      "n": 24,
      "prop": 0.0000126173346406294
    },
    {
      "year": 1953,
      "sex": "F",
      "name": "Linda",
      "n": 61264,
      "prop": 0.0317575840515387
    },
    {
      "year": 1953,
      "sex": "F",
      "name": "Deborah",
      "n": 52196,
      "prop": 0.0270569805620611
    },
    {
      "year": 1953,
      "sex": "F",
      "name": "Patricia",
      "n": 51007,
      "prop": 0.0264406354419697
    },
    {
      "year": 1953,
      "sex": "F",
      "name": "Betty",
      "n": 11367,
      "prop": 0.00589234228770306
    },
    {
      "year": 1953,
      "sex": "F",
      "name": "Dorothy",
      "n": 8154,
      "prop": 0.00422681085721217
    },
    {
      "year": 1953,
      "sex": "F",
      "name": "Helen",
      "n": 6120,
      "prop": 0.00317244081998265
    },
    {
      "year": 1953,
      "sex": "F",
      "name": "Jessica",
      "n": 495,
      "prop": 0.000256594478086832
    },
    {
      "year": 1953,
      "sex": "F",
      "name": "Amanda",
      "n": 428,
      "prop": 0.000221863508325584
    },
    {
      "year": 1953,
      "sex": "F",
      "name": "Ashley",
      "n": 15,
      "prop": 0.0000077755902450555
    },
    {
      "year": 1954,
      "sex": "F",
      "name": "Linda",
      "n": 55371,
      "prop": 0.0278157891564086
    },
    {
      "year": 1954,
      "sex": "F",
      "name": "Deborah",
      "n": 54674,
      "prop": 0.0274656491003862
    },
    {
      "year": 1954,
      "sex": "F",
      "name": "Patricia",
      "n": 49133,
      "prop": 0.0246821110079613
    },
    {
      "year": 1954,
      "sex": "F",
      "name": "Betty",
      "n": 10615,
      "prop": 0.00533247732378461
    },
    {
      "year": 1954,
      "sex": "F",
      "name": "Dorothy",
      "n": 7791,
      "prop": 0.00391383239091907
    },
    {
      "year": 1954,
      "sex": "F",
      "name": "Helen",
      "n": 5940,
      "prop": 0.00298397694802455
    },
    {
      "year": 1954,
      "sex": "F",
      "name": "Amanda",
      "n": 428,
      "prop": 0.000215007093224664
    },
    {
      "year": 1954,
      "sex": "F",
      "name": "Jessica",
      "n": 424,
      "prop": 0.000212997681138453
    },
    {
      "year": 1954,
      "sex": "F",
      "name": "Ashley",
      "n": 21,
      "prop": 0.000010549413452612
    },
    {
      "year": 1955,
      "sex": "F",
      "name": "Deborah",
      "n": 52314,
      "prop": 0.026099932497594
    },
    {
      "year": 1955,
      "sex": "F",
      "name": "Linda",
      "n": 51279,
      "prop": 0.0255835615426869
    },
    {
      "year": 1955,
      "sex": "F",
      "name": "Patricia",
      "n": 46210,
      "prop": 0.0230545911364801
    },
    {
      "year": 1955,
      "sex": "F",
      "name": "Betty",
      "n": 9928,
      "prop": 0.00495316989402671
    },
    {
      "year": 1955,
      "sex": "F",
      "name": "Dorothy",
      "n": 7241,
      "prop": 0.00361260104780897
    },
    {
      "year": 1955,
      "sex": "F",
      "name": "Helen",
      "n": 5596,
      "prop": 0.00279189552044455
    },
    {
      "year": 1955,
      "sex": "F",
      "name": "Amanda",
      "n": 452,
      "prop": 0.000225506929099524
    },
    {
      "year": 1955,
      "sex": "F",
      "name": "Jessica",
      "n": 386,
      "prop": 0.000192578926177912
    },
    {
      "year": 1955,
      "sex": "F",
      "name": "Ashley",
      "n": 8,
      "prop": 0.0000039912730814075
    },
    {
      "year": 1956,
      "sex": "F",
      "name": "Linda",
      "n": 48067,
      "prop": 0.0233410866641092
    },
    {
      "year": 1956,
      "sex": "F",
      "name": "Deborah",
      "n": 47829,
      "prop": 0.0232255150947153
    },
    {
      "year": 1956,
      "sex": "F",
      "name": "Patricia",
      "n": 43332,
      "prop": 0.0210417951469653
    },
    {
      "year": 1956,
      "sex": "F",
      "name": "Betty",
      "n": 9213,
      "prop": 0.00447378516313558
    },
    {
      "year": 1956,
      "sex": "F",
      "name": "Dorothy",
      "n": 6862,
      "prop": 0.00333215171924849
    },
    {
      "year": 1956,
      "sex": "F",
      "name": "Helen",
      "n": 5279,
      "prop": 0.00256345510433005
    },
    {
      "year": 1956,
      "sex": "F",
      "name": "Amanda",
      "n": 643,
      "prop": 0.000312237475295363
    },
    {
      "year": 1956,
      "sex": "F",
      "name": "Jessica",
      "n": 406,
      "prop": 0.00019715150073082
    },
    {
      "year": 1956,
      "sex": "F",
      "name": "Ashley",
      "n": 25,
      "prop": 0.0000121398707346564
    },
    {
      "year": 1957,
      "sex": "F",
      "name": "Linda",
      "n": 44495,
      "prop": 0.021213187408344
    },
    {
      "year": 1957,
      "sex": "F",
      "name": "Deborah",
      "n": 40065,
      "prop": 0.0191011653784763
    },
    {
      "year": 1957,
      "sex": "F",
      "name": "Patricia",
      "n": 39277,
      "prop": 0.0187254829045404
    },
    {
      "year": 1957,
      "sex": "F",
      "name": "Betty",
      "n": 8474,
      "prop": 0.00404001685803589
    },
    {
      "year": 1957,
      "sex": "F",
      "name": "Dorothy",
      "n": 6401,
      "prop": 0.00305170496911585
    },
    {
      "year": 1957,
      "sex": "F",
      "name": "Helen",
      "n": 5015,
      "prop": 0.0023909233588683
    },
    {
      "year": 1957,
      "sex": "F",
      "name": "Amanda",
      "n": 667,
      "prop": 0.000317995190501527
    },
    {
      "year": 1957,
      "sex": "F",
      "name": "Jessica",
      "n": 476,
      "prop": 0.000226935098468856
    },
    {
      "year": 1957,
      "sex": "F",
      "name": "Ashley",
      "n": 27,
      "prop": 0.0000128723690307964
    },
    {
      "year": 1958,
      "sex": "F",
      "name": "Linda",
      "n": 41898,
      "prop": 0.0202894802981679
    },
    {
      "year": 1958,
      "sex": "F",
      "name": "Patricia",
      "n": 37932,
      "prop": 0.0183689094150104
    },
    {
      "year": 1958,
      "sex": "F",
      "name": "Deborah",
      "n": 32936,
      "prop": 0.015949551842581
    },
    {
      "year": 1958,
      "sex": "F",
      "name": "Betty",
      "n": 7709,
      "prop": 0.00373315202679308
    },
    {
      "year": 1958,
      "sex": "F",
      "name": "Dorothy",
      "n": 5539,
      "prop": 0.00268231016687078
    },
    {
      "year": 1958,
      "sex": "F",
      "name": "Helen",
      "n": 4763,
      "prop": 0.0023065252436912
    },
    {
      "year": 1958,
      "sex": "F",
      "name": "Amanda",
      "n": 796,
      "prop": 0.00038547010161205
    },
    {
      "year": 1958,
      "sex": "F",
      "name": "Jessica",
      "n": 529,
      "prop": 0.000256172969538661
    },
    {
      "year": 1958,
      "sex": "F",
      "name": "Ashley",
      "n": 38,
      "prop": 0.0000184018390216808
    },
    {
      "year": 1959,
      "sex": "F",
      "name": "Linda",
      "n": 40409,
      "prop": 0.0194416392387311
    },
    {
      "year": 1959,
      "sex": "F",
      "name": "Patricia",
      "n": 35221,
      "prop": 0.0169455808267303
    },
    {
      "year": 1959,
      "sex": "F",
      "name": "Deborah",
      "n": 29552,
      "prop": 0.0142181029667396
    },
    {
      "year": 1959,
      "sex": "F",
      "name": "Betty",
      "n": 7317,
      "prop": 0.00352036611422691
    },
    {
      "year": 1959,
      "sex": "F",
      "name": "Dorothy",
      "n": 5238,
      "prop": 0.00252011448767535
    },
    {
      "year": 1959,
      "sex": "F",
      "name": "Helen",
      "n": 4378,
      "prop": 0.00210634998607153
    },
    {
      "year": 1959,
      "sex": "F",
      "name": "Amanda",
      "n": 858,
      "prop": 0.000412802258576833
    },
    {
      "year": 1959,
      "sex": "F",
      "name": "Jessica",
      "n": 523,
      "prop": 0.000251626551556741
    },
    {
      "year": 1959,
      "sex": "F",
      "name": "Ashley",
      "n": 37,
      "prop": 0.0000178014959992341
    },
    {
      "year": 1960,
      "sex": "F",
      "name": "Linda",
      "n": 37314,
      "prop": 0.0179400268278259
    },
    {
      "year": 1960,
      "sex": "F",
      "name": "Patricia",
      "n": 32107,
      "prop": 0.0154365771925017
    },
    {
      "year": 1960,
      "sex": "F",
      "name": "Deborah",
      "n": 25269,
      "prop": 0.012148966551759
    },
    {
      "year": 1960,
      "sex": "F",
      "name": "Betty",
      "n": 6503,
      "prop": 0.00312654752804181
    },
    {
      "year": 1960,
      "sex": "F",
      "name": "Dorothy",
      "n": 5077,
      "prop": 0.00244094753188809
    },
    {
      "year": 1960,
      "sex": "F",
      "name": "Helen",
      "n": 4069,
      "prop": 0.00195631583755223
    },
    {
      "year": 1960,
      "sex": "F",
      "name": "Amanda",
      "n": 977,
      "prop": 0.000469727346593395
    },
    {
      "year": 1960,
      "sex": "F",
      "name": "Jessica",
      "n": 560,
      "prop": 0.000269239830186593
    },
    {
      "year": 1960,
      "sex": "F",
      "name": "Ashley",
      "n": 57,
      "prop": 0.0000274047684297068
    },
    {
      "year": 1961,
      "sex": "F",
      "name": "Linda",
      "n": 35574,
      "prop": 0.0171339811436622
    },
    {
      "year": 1961,
      "sex": "F",
      "name": "Patricia",
      "n": 28867,
      "prop": 0.0139035990800612
    },
    {
      "year": 1961,
      "sex": "F",
      "name": "Deborah",
      "n": 24092,
      "prop": 0.0116037520018302
    },
    {
      "year": 1961,
      "sex": "F",
      "name": "Betty",
      "n": 5580,
      "prop": 0.00268756998880179
    },
    {
      "year": 1961,
      "sex": "F",
      "name": "Dorothy",
      "n": 4726,
      "prop": 0.00227624655323965
    },
    {
      "year": 1961,
      "sex": "F",
      "name": "Helen",
      "n": 3855,
      "prop": 0.00185673518043565
    },
    {
      "year": 1961,
      "sex": "F",
      "name": "Amanda",
      "n": 1057,
      "prop": 0.0005090970390974
    },
    {
      "year": 1961,
      "sex": "F",
      "name": "Jessica",
      "n": 669,
      "prop": 0.000322219412635914
    },
    {
      "year": 1961,
      "sex": "F",
      "name": "Ashley",
      "n": 80,
      "prop": 0.0000385314693735024
    },
    {
      "year": 1962,
      "sex": "F",
      "name": "Linda",
      "n": 31462,
      "prop": 0.015521322454956
    },
    {
      "year": 1962,
      "sex": "F",
      "name": "Patricia",
      "n": 26538,
      "prop": 0.0130921383036559
    },
    {
      "year": 1962,
      "sex": "F",
      "name": "Deborah",
      "n": 22893,
      "prop": 0.0112939302956363
    },
    {
      "year": 1962,
      "sex": "F",
      "name": "Betty",
      "n": 4765,
      "prop": 0.00235074380197906
    },
    {
      "year": 1962,
      "sex": "F",
      "name": "Dorothy",
      "n": 4075,
      "prop": 0.00201034228605765
    },
    {
      "year": 1962,
      "sex": "F",
      "name": "Helen",
      "n": 3587,
      "prop": 0.00176959454726105
    },
    {
      "year": 1962,
      "sex": "F",
      "name": "Amanda",
      "n": 948,
      "prop": 0.000467682082744208
    },
    {
      "year": 1962,
      "sex": "F",
      "name": "Jessica",
      "n": 867,
      "prop": 0.000427721904788216
    },
    {
      "year": 1962,
      "sex": "F",
      "name": "Ashley",
      "n": 95,
      "prop": 0.000046866875380485
    },
    {
      "year": 1963,
      "sex": "F",
      "name": "Linda",
      "n": 27715,
      "prop": 0.0139419183153997
    },
    {
      "year": 1963,
      "sex": "F",
      "name": "Patricia",
      "n": 25363,
      "prop": 0.0127587542570263
    },
    {
      "year": 1963,
      "sex": "F",
      "name": "Deborah",
      "n": 21062,
      "prop": 0.0105951536553833
    },
    {
      "year": 1963,
      "sex": "F",
      "name": "Betty",
      "n": 4154,
      "prop": 0.00208965284799461
    },
    {
      "year": 1963,
      "sex": "F",
      "name": "Dorothy",
      "n": 3791,
      "prop": 0.00190704717061809
    },
    {
      "year": 1963,
      "sex": "F",
      "name": "Helen",
      "n": 3340,
      "prop": 0.00168017345024121
    },
    {
      "year": 1963,
      "sex": "F",
      "name": "Jessica",
      "n": 1121,
      "prop": 0.000563914502311496
    },
    {
      "year": 1963,
      "sex": "F",
      "name": "Amanda",
      "n": 1035,
      "prop": 0.000520652551197501
    },
    {
      "year": 1963,
      "sex": "F",
      "name": "Ashley",
      "n": 108,
      "prop": 0.000054328961864087
    },
    {
      "year": 1964,
      "sex": "F",
      "name": "Patricia",
      "n": 26087,
      "prop": 0.013328857510441
    },
    {
      "year": 1964,
      "sex": "F",
      "name": "Linda",
      "n": 23633,
      "prop": 0.0120750139741731
    },
    {
      "year": 1964,
      "sex": "F",
      "name": "Deborah",
      "n": 19306,
      "prop": 0.00986418227839823
    },
    {
      "year": 1964,
      "sex": "F",
      "name": "Betty",
      "n": 4067,
      "prop": 0.00207798763732755
    },
    {
      "year": 1964,
      "sex": "F",
      "name": "Dorothy",
      "n": 3535,
      "prop": 0.00180616825619692
    },
    {
      "year": 1964,
      "sex": "F",
      "name": "Helen",
      "n": 3095,
      "prop": 0.00158135523420918
    },
    {
      "year": 1964,
      "sex": "F",
      "name": "Amanda",
      "n": 1275,
      "prop": 0.000651446825078097
    },
    {
      "year": 1964,
      "sex": "F",
      "name": "Jessica",
      "n": 1172,
      "prop": 0.000598820140385513
    },
    {
      "year": 1964,
      "sex": "F",
      "name": "Ashley",
      "n": 180,
      "prop": 0.0000919689635404372
    },
    {
      "year": 1965,
      "sex": "F",
      "name": "Patricia",
      "n": 23551,
      "prop": 0.0128881183708359
    },
    {
      "year": 1965,
      "sex": "F",
      "name": "Linda",
      "n": 19339,
      "prop": 0.0105831311270687
    },
    {
      "year": 1965,
      "sex": "F",
      "name": "Deborah",
      "n": 17083,
      "prop": 0.00934855106488003
    },
    {
      "year": 1965,
      "sex": "F",
      "name": "Betty",
      "n": 3565,
      "prop": 0.00195092106458452
    },
    {
      "year": 1965,
      "sex": "F",
      "name": "Dorothy",
      "n": 2960,
      "prop": 0.00161983908868728
    },
    {
      "year": 1965,
      "sex": "F",
      "name": "Helen",
      "n": 2804,
      "prop": 0.00153446919076998
    },
    {
      "year": 1965,
      "sex": "F",
      "name": "Amanda",
      "n": 1650,
      "prop": 0.000902950843356088
    },
    {
      "year": 1965,
      "sex": "F",
      "name": "Jessica",
      "n": 1529,
      "prop": 0.000836734448176641
    },
    {
      "year": 1965,
      "sex": "F",
      "name": "Ashley",
      "n": 218,
      "prop": 0.000119298959910077
    },
    {
      "year": 1966,
      "sex": "F",
      "name": "Patricia",
      "n": 20115,
      "prop": 0.0114579150183275
    },
    {
      "year": 1966,
      "sex": "F",
      "name": "Deborah",
      "n": 16250,
      "prop": 0.00925633204314305
    },
    {
      "year": 1966,
      "sex": "F",
      "name": "Linda",
      "n": 15560,
      "prop": 0.00886329394408036
    },
    {
      "year": 1966,
      "sex": "F",
      "name": "Betty",
      "n": 2948,
      "prop": 0.00167924103773451
    },
    {
      "year": 1966,
      "sex": "F",
      "name": "Dorothy",
      "n": 2667,
      "prop": 0.00151917769594231
    },
    {
      "year": 1966,
      "sex": "F",
      "name": "Helen",
      "n": 2449,
      "prop": 0.00139500044145584
    },
    {
      "year": 1966,
      "sex": "F",
      "name": "Amanda",
      "n": 2329,
      "prop": 0.00132664598944493
    },
    {
      "year": 1966,
      "sex": "F",
      "name": "Jessica",
      "n": 1665,
      "prop": 0.000948418021651273
    },
    {
      "year": 1966,
      "sex": "F",
      "name": "Ashley",
      "n": 263,
      "prop": 0.000149810173990561
    },
    {
      "year": 1967,
      "sex": "F",
      "name": "Patricia",
      "n": 17746,
      "prop": 0.0103375520052381
    },
    {
      "year": 1967,
      "sex": "F",
      "name": "Deborah",
      "n": 14007,
      "prop": 0.00815947768158289
    },
    {
      "year": 1967,
      "sex": "F",
      "name": "Linda",
      "n": 13199,
      "prop": 0.00768879459693101
    },
    {
      "year": 1967,
      "sex": "F",
      "name": "Amanda",
      "n": 2663,
      "prop": 0.00155127358221284
    },
    {
      "year": 1967,
      "sex": "F",
      "name": "Betty",
      "n": 2543,
      "prop": 0.00148137015379919
    },
    {
      "year": 1967,
      "sex": "F",
      "name": "Dorothy",
      "n": 2316,
      "prop": 0.00134913616838338
    },
    {
      "year": 1967,
      "sex": "F",
      "name": "Helen",
      "n": 2153,
      "prop": 0.00125418401145484
    },
    {
      "year": 1967,
      "sex": "F",
      "name": "Jessica",
      "n": 1761,
      "prop": 0.00102583281197026
    },
    {
      "year": 1967,
      "sex": "F",
      "name": "Ashley",
      "n": 386,
      "prop": 0.000224856028063896
    },
    {
      "year": 1968,
      "sex": "F",
      "name": "Patricia",
      "n": 15806,
      "prop": 0.00924608652923696
    },
    {
      "year": 1968,
      "sex": "F",
      "name": "Deborah",
      "n": 12286,
      "prop": 0.0071869808362777
    },
    {
      "year": 1968,
      "sex": "F",
      "name": "Linda",
      "n": 11368,
      "prop": 0.00664997543112525
    },
    {
      "year": 1968,
      "sex": "F",
      "name": "Amanda",
      "n": 2430,
      "prop": 0.00142148489599176
    },
    {
      "year": 1968,
      "sex": "F",
      "name": "Betty",
      "n": 2134,
      "prop": 0.00124833282635655
    },
    {
      "year": 1968,
      "sex": "F",
      "name": "Dorothy",
      "n": 2084,
      "prop": 0.0012190841659452
    },
    {
      "year": 1968,
      "sex": "F",
      "name": "Helen",
      "n": 1881,
      "prop": 0.00110033460467511
    },
    {
      "year": 1968,
      "sex": "F",
      "name": "Jessica",
      "n": 1841,
      "prop": 0.00107693567634602
    },
    {
      "year": 1968,
      "sex": "F",
      "name": "Ashley",
      "n": 544,
      "prop": 0.000318225425275522
    },
    {
      "year": 1969,
      "sex": "F",
      "name": "Patricia",
      "n": 14957,
      "prop": 0.00848518199146773
    },
    {
      "year": 1969,
      "sex": "F",
      "name": "Deborah",
      "n": 11186,
      "prop": 0.00634587455750204
    },
    {
      "year": 1969,
      "sex": "F",
      "name": "Linda",
      "n": 10248,
      "prop": 0.00581374239811201
    },
    {
      "year": 1969,
      "sex": "F",
      "name": "Amanda",
      "n": 2817,
      "prop": 0.00159809839339203
    },
    {
      "year": 1969,
      "sex": "F",
      "name": "Jessica",
      "n": 2492,
      "prop": 0.00141372424434964
    },
    {
      "year": 1969,
      "sex": "F",
      "name": "Betty",
      "n": 2133,
      "prop": 0.00121006172279205
    },
    {
      "year": 1969,
      "sex": "F",
      "name": "Helen",
      "n": 1857,
      "prop": 0.00105348552237451
    },
    {
      "year": 1969,
      "sex": "F",
      "name": "Dorothy",
      "n": 1778,
      "prop": 0.00100866842153036
    },
    {
      "year": 1969,
      "sex": "F",
      "name": "Ashley",
      "n": 643,
      "prop": 0.000364777162566942
    },
    {
      "year": 1970,
      "sex": "F",
      "name": "Patricia",
      "n": 13404,
      "prop": 0.00731676961673752
    },
    {
      "year": 1970,
      "sex": "F",
      "name": "Deborah",
      "n": 9853,
      "prop": 0.00537840428481907
    },
    {
      "year": 1970,
      "sex": "F",
      "name": "Linda",
      "n": 8734,
      "prop": 0.00476758175414693
    },
    {
      "year": 1970,
      "sex": "F",
      "name": "Jessica",
      "n": 4023,
      "prop": 0.00219601344137086
    },
    {
      "year": 1970,
      "sex": "F",
      "name": "Amanda",
      "n": 3550,
      "prop": 0.00193781946727978
    },
    {
      "year": 1970,
      "sex": "F",
      "name": "Betty",
      "n": 1967,
      "prop": 0.0010737157442646
    },
    {
      "year": 1970,
      "sex": "F",
      "name": "Dorothy",
      "n": 1802,
      "prop": 0.000983648078883991
    },
    {
      "year": 1970,
      "sex": "F",
      "name": "Helen",
      "n": 1715,
      "prop": 0.000936157855319669
    },
    {
      "year": 1970,
      "sex": "F",
      "name": "Ashley",
      "n": 932,
      "prop": 0.000508745843240776
    },
    {
      "year": 1971,
      "sex": "F",
      "name": "Patricia",
      "n": 11466,
      "prop": 0.006543190995437
    },
    {
      "year": 1971,
      "sex": "F",
      "name": "Deborah",
      "n": 8675,
      "prop": 0.00495047809919902
    },
    {
      "year": 1971,
      "sex": "F",
      "name": "Linda",
      "n": 7379,
      "prop": 0.00421090235089217
    },
    {
      "year": 1971,
      "sex": "F",
      "name": "Jessica",
      "n": 5360,
      "prop": 0.00305873920596043
    },
    {
      "year": 1971,
      "sex": "F",
      "name": "Amanda",
      "n": 4133,
      "prop": 0.00235853901832733
    },
    {
      "year": 1971,
      "sex": "F",
      "name": "Betty",
      "n": 1763,
      "prop": 0.00100607410822915
    },
    {
      "year": 1971,
      "sex": "F",
      "name": "Dorothy",
      "n": 1626,
      "prop": 0.000927893647181281
    },
    {
      "year": 1971,
      "sex": "F",
      "name": "Helen",
      "n": 1441,
      "prop": 0.000822321491751676
    },
    {
      "year": 1971,
      "sex": "F",
      "name": "Ashley",
      "n": 1164,
      "prop": 0.000664248588757079
    },
    {
      "year": 1972,
      "sex": "F",
      "name": "Patricia",
      "n": 9602,
      "prop": 0.00595464005496972
    },
    {
      "year": 1972,
      "sex": "F",
      "name": "Deborah",
      "n": 6279,
      "prop": 0.00389389553271765
    },
    {
      "year": 1972,
      "sex": "F",
      "name": "Jessica",
      "n": 6208,
      "prop": 0.00384986518030119
    },
    {
      "year": 1972,
      "sex": "F",
      "name": "Linda",
      "n": 5746,
      "prop": 0.00356335781668986
    },
    {
      "year": 1972,
      "sex": "F",
      "name": "Amanda",
      "n": 4181,
      "prop": 0.00259282962610169
    },
    {
      "year": 1972,
      "sex": "F",
      "name": "Betty",
      "n": 1366,
      "prop": 0.000847119174660346
    },
    {
      "year": 1972,
      "sex": "F",
      "name": "Dorothy",
      "n": 1277,
      "prop": 0.0007919261976876
    },
    {
      "year": 1972,
      "sex": "F",
      "name": "Helen",
      "n": 1245,
      "prop": 0.000772081531809759
    },
    {
      "year": 1972,
      "sex": "F",
      "name": "Ashley",
      "n": 1176,
      "prop": 0.000729291471010664
    },
    {
      "year": 1973,
      "sex": "F",
      "name": "Patricia",
      "n": 8477,
      "prop": 0.00545491634229101
    },
    {
      "year": 1973,
      "sex": "F",
      "name": "Jessica",
      "n": 7226,
      "prop": 0.00464990273556622
    },
    {
      "year": 1973,
      "sex": "F",
      "name": "Amanda",
      "n": 5627,
      "prop": 0.00362095249004029
    },
    {
      "year": 1973,
      "sex": "F",
      "name": "Deborah",
      "n": 4984,
      "prop": 0.00320718450512899
    },
    {
      "year": 1973,
      "sex": "F",
      "name": "Linda",
      "n": 4735,
      "prop": 0.00304695397909024
    },
    {
      "year": 1973,
      "sex": "F",
      "name": "Betty",
      "n": 1323,
      "prop": 0.000851345325097441
    },
    {
      "year": 1973,
      "sex": "F",
      "name": "Ashley",
      "n": 1253,
      "prop": 0.00080630059890181
    },
    {
      "year": 1973,
      "sex": "F",
      "name": "Dorothy",
      "n": 1175,
      "prop": 0.000756107903998106
    },
    {
      "year": 1973,
      "sex": "F",
      "name": "Helen",
      "n": 1133,
      "prop": 0.000729081068280726
    },
    {
      "year": 1974,
      "sex": "F",
      "name": "Jessica",
      "n": 10653,
      "prop": 0.00680199571179919
    },
    {
      "year": 1974,
      "sex": "F",
      "name": "Patricia",
      "n": 8040,
      "prop": 0.00513358166928241
    },
    {
      "year": 1974,
      "sex": "F",
      "name": "Amanda",
      "n": 7476,
      "prop": 0.00477346474621335
    },
    {
      "year": 1974,
      "sex": "F",
      "name": "Deborah",
      "n": 4345,
      "prop": 0.00277430501903384
    },
    {
      "year": 1974,
      "sex": "F",
      "name": "Linda",
      "n": 4085,
      "prop": 0.00260829367151973
    },
    {
      "year": 1974,
      "sex": "F",
      "name": "Ashley",
      "n": 1626,
      "prop": 0.00103820942714592
    },
    {
      "year": 1974,
      "sex": "F",
      "name": "Helen",
      "n": 1140,
      "prop": 0.000727895908331088
    },
    {
      "year": 1974,
      "sex": "F",
      "name": "Betty",
      "n": 1130,
      "prop": 0.000721510856503622
    },
    {
      "year": 1974,
      "sex": "F",
      "name": "Dorothy",
      "n": 1100,
      "prop": 0.000702355701021225
    },
    {
      "year": 1975,
      "sex": "F",
      "name": "Jessica",
      "n": 12930,
      "prop": 0.00828471748344498
    },
    {
      "year": 1975,
      "sex": "F",
      "name": "Amanda",
      "n": 12653,
      "prop": 0.00810723358994813
    },
    {
      "year": 1975,
      "sex": "F",
      "name": "Patricia",
      "n": 7056,
      "prop": 0.00452103376358761
    },
    {
      "year": 1975,
      "sex": "F",
      "name": "Linda",
      "n": 3525,
      "prop": 0.00225859467356099
    },
    {
      "year": 1975,
      "sex": "F",
      "name": "Deborah",
      "n": 3415,
      "prop": 0.00218811370502433
    },
    {
      "year": 1975,
      "sex": "F",
      "name": "Ashley",
      "n": 1988,
      "prop": 0.00127378332228064
    },
    {
      "year": 1975,
      "sex": "F",
      "name": "Helen",
      "n": 1057,
      "prop": 0.000677258034029493
    },
    {
      "year": 1975,
      "sex": "F",
      "name": "Betty",
      "n": 1021,
      "prop": 0.000654191535235679
    },
    {
      "year": 1975,
      "sex": "F",
      "name": "Dorothy",
      "n": 975,
      "prop": 0.000624717675665805
    },
    {
      "year": 1976,
      "sex": "F",
      "name": "Jessica",
      "n": 18370,
      "prop": 0.0116864866171597
    },
    {
      "year": 1976,
      "sex": "F",
      "name": "Amanda",
      "n": 15591,
      "prop": 0.00991856357366017
    },
    {
      "year": 1976,
      "sex": "F",
      "name": "Patricia",
      "n": 6017,
      "prop": 0.00382784920933316
    },
    {
      "year": 1976,
      "sex": "F",
      "name": "Linda",
      "n": 3141,
      "prop": 0.00199821744499176
    },
    {
      "year": 1976,
      "sex": "F",
      "name": "Deborah",
      "n": 2994,
      "prop": 0.00190470010515929
    },
    {
      "year": 1976,
      "sex": "F",
      "name": "Ashley",
      "n": 2292,
      "prop": 0.00145810709453076
    },
    {
      "year": 1976,
      "sex": "F",
      "name": "Dorothy",
      "n": 983,
      "prop": 0.000625357449355907
    },
    {
      "year": 1976,
      "sex": "F",
      "name": "Helen",
      "n": 942,
      "prop": 0.000599274381783586
    },
    {
      "year": 1976,
      "sex": "F",
      "name": "Betty",
      "n": 908,
      "prop": 0.000577644520869953
    },
    {
      "year": 1977,
      "sex": "F",
      "name": "Jessica",
      "n": 24843,
      "prop": 0.0151032385968816
    },
    {
      "year": 1977,
      "sex": "F",
      "name": "Amanda",
      "n": 18280,
      "prop": 0.01111327945703
    },
    {
      "year": 1977,
      "sex": "F",
      "name": "Patricia",
      "n": 5907,
      "prop": 0.00359114561010263
    },
    {
      "year": 1977,
      "sex": "F",
      "name": "Linda",
      "n": 2909,
      "prop": 0.0017685191433534
    },
    {
      "year": 1977,
      "sex": "F",
      "name": "Ashley",
      "n": 2706,
      "prop": 0.00164510581021461
    },
    {
      "year": 1977,
      "sex": "F",
      "name": "Deborah",
      "n": 2677,
      "prop": 0.00162747533405193
    },
    {
      "year": 1977,
      "sex": "F",
      "name": "Helen",
      "n": 992,
      "prop": 0.00060308387425458
    },
    {
      "year": 1977,
      "sex": "F",
      "name": "Dorothy",
      "n": 934,
      "prop": 0.000567822921929212
    },
    {
      "year": 1977,
      "sex": "F",
      "name": "Betty",
      "n": 807,
      "prop": 0.000490613595285732
    },
    {
      "year": 1978,
      "sex": "F",
      "name": "Jessica",
      "n": 26105,
      "prop": 0.0158812818667457
    },
    {
      "year": 1978,
      "sex": "F",
      "name": "Amanda",
      "n": 20522,
      "prop": 0.0124847985623197
    },
    {
      "year": 1978,
      "sex": "F",
      "name": "Patricia",
      "n": 5498,
      "prop": 0.00334477256094111
    },
    {
      "year": 1978,
      "sex": "F",
      "name": "Ashley",
      "n": 3484,
      "prop": 0.00211953212119295
    },
    {
      "year": 1978,
      "sex": "F",
      "name": "Linda",
      "n": 2936,
      "prop": 0.00178614991613734
    },
    {
      "year": 1978,
      "sex": "F",
      "name": "Deborah",
      "n": 2479,
      "prop": 0.00150812862469498
    },
    {
      "year": 1978,
      "sex": "F",
      "name": "Helen",
      "n": 922,
      "prop": 0.000560909476389179
    },
    {
      "year": 1978,
      "sex": "F",
      "name": "Dorothy",
      "n": 913,
      "prop": 0.00055543422119666
    },
    {
      "year": 1978,
      "sex": "F",
      "name": "Betty",
      "n": 715,
      "prop": 0.000434978606961239
    },
    {
      "year": 1979,
      "sex": "F",
      "name": "Amanda",
      "n": 31927,
      "prop": 0.018529201469011
    },
    {
      "year": 1979,
      "sex": "F",
      "name": "Jessica",
      "n": 27777,
      "prop": 0.0161207012624023
    },
    {
      "year": 1979,
      "sex": "F",
      "name": "Patricia",
      "n": 5651,
      "prop": 0.0032796228114568
    },
    {
      "year": 1979,
      "sex": "F",
      "name": "Ashley",
      "n": 4450,
      "prop": 0.0025826086552792
    },
    {
      "year": 1979,
      "sex": "F",
      "name": "Linda",
      "n": 2739,
      "prop": 0.00158961013636174
    },
    {
      "year": 1979,
      "sex": "F",
      "name": "Deborah",
      "n": 2181,
      "prop": 0.00126576842183459
    },
    {
      "year": 1979,
      "sex": "F",
      "name": "Dorothy",
      "n": 889,
      "prop": 0.000515941369560272
    },
    {
      "year": 1979,
      "sex": "F",
      "name": "Helen",
      "n": 879,
      "prop": 0.000510137754604588
    },
    {
      "year": 1979,
      "sex": "F",
      "name": "Betty",
      "n": 711,
      "prop": 0.000412637023349104
    },
    {
      "year": 1980,
      "sex": "F",
      "name": "Amanda",
      "n": 35819,
      "prop": 0.0201204564808553
    },
    {
      "year": 1980,
      "sex": "F",
      "name": "Jessica",
      "n": 33921,
      "prop": 0.0190543009097711
    },
    {
      "year": 1980,
      "sex": "F",
      "name": "Ashley",
      "n": 7296,
      "prop": 0.00409835144711801
    },
    {
      "year": 1980,
      "sex": "F",
      "name": "Patricia",
      "n": 5309,
      "prop": 0.00298220227970799
    },
    {
      "year": 1980,
      "sex": "F",
      "name": "Linda",
      "n": 2805,
      "prop": 0.00157564087296683
    },
    {
      "year": 1980,
      "sex": "F",
      "name": "Deborah",
      "n": 1938,
      "prop": 0.00108862460314072
    },
    {
      "year": 1980,
      "sex": "F",
      "name": "Helen",
      "n": 909,
      "prop": 0.000510608753485509
    },
    {
      "year": 1980,
      "sex": "F",
      "name": "Dorothy",
      "n": 895,
      "prop": 0.00050274459226571
    },
    {
      "year": 1980,
      "sex": "F",
      "name": "Betty",
      "n": 658,
      "prop": 0.000369615577330544
    },
    {
      "year": 1981,
      "sex": "F",
      "name": "Jessica",
      "n": 42527,
      "prop": 0.0237842499463097
    },
    {
      "year": 1981,
      "sex": "F",
      "name": "Amanda",
      "n": 34373,
      "prop": 0.0192239288782304
    },
    {
      "year": 1981,
      "sex": "F",
      "name": "Ashley",
      "n": 8877,
      "prop": 0.00496467624740497
    },
    {
      "year": 1981,
      "sex": "F",
      "name": "Patricia",
      "n": 5285,
      "prop": 0.0029557636552366
    },
    {
      "year": 1981,
      "sex": "F",
      "name": "Linda",
      "n": 2730,
      "prop": 0.00152681831197652
    },
    {
      "year": 1981,
      "sex": "F",
      "name": "Deborah",
      "n": 1905,
      "prop": 0.00106541717374186
    },
    {
      "year": 1981,
      "sex": "F",
      "name": "Helen",
      "n": 896,
      "prop": 0.000501109599828191
    },
    {
      "year": 1981,
      "sex": "F",
      "name": "Dorothy",
      "n": 787,
      "prop": 0.00044014872217052
    },
    {
      "year": 1981,
      "sex": "F",
      "name": "Betty",
      "n": 662,
      "prop": 0.000370239458801632
    },
    {
      "year": 1982,
      "sex": "F",
      "name": "Jessica",
      "n": 45445,
      "prop": 0.0250562932675237
    },
    {
      "year": 1982,
      "sex": "F",
      "name": "Amanda",
      "n": 34210,
      "prop": 0.0188618284229725
    },
    {
      "year": 1982,
      "sex": "F",
      "name": "Ashley",
      "n": 14851,
      "prop": 0.00818816176292209
    },
    {
      "year": 1982,
      "sex": "F",
      "name": "Patricia",
      "n": 5167,
      "prop": 0.00284884733883364
    },
    {
      "year": 1982,
      "sex": "F",
      "name": "Linda",
      "n": 2787,
      "prop": 0.00153662425649881
    },
    {
      "year": 1982,
      "sex": "F",
      "name": "Deborah",
      "n": 1842,
      "prop": 0.00101559450321881
    },
    {
      "year": 1982,
      "sex": "F",
      "name": "Helen",
      "n": 875,
      "prop": 0.000482434956740747
    },
    {
      "year": 1982,
      "sex": "F",
      "name": "Dorothy",
      "n": 828,
      "prop": 0.000456521307635815
    },
    {
      "year": 1982,
      "sex": "F",
      "name": "Betty",
      "n": 635,
      "prop": 0.000350109940034713
    },
    {
      "year": 1983,
      "sex": "F",
      "name": "Jessica",
      "n": 45278,
      "prop": 0.0253076258799791
    },
    {
      "year": 1983,
      "sex": "F",
      "name": "Amanda",
      "n": 33754,
      "prop": 0.0188664164484477
    },
    {
      "year": 1983,
      "sex": "F",
      "name": "Ashley",
      "n": 33290,
      "prop": 0.0186070688975773
    },
    {
      "year": 1983,
      "sex": "F",
      "name": "Patricia",
      "n": 4922,
      "prop": 0.00275109621850031
    },
    {
      "year": 1983,
      "sex": "F",
      "name": "Linda",
      "n": 2473,
      "prop": 0.0013822553734968
    },
    {
      "year": 1983,
      "sex": "F",
      "name": "Deborah",
      "n": 1605,
      "prop": 0.000897096592989232
    },
    {
      "year": 1983,
      "sex": "F",
      "name": "Helen",
      "n": 844,
      "prop": 0.000471744252014275
    },
    {
      "year": 1983,
      "sex": "F",
      "name": "Dorothy",
      "n": 759,
      "prop": 0.000424234463600515
    },
    {
      "year": 1983,
      "sex": "F",
      "name": "Betty",
      "n": 563,
      "prop": 0.000314682480905257
    },
    {
      "year": 1984,
      "sex": "F",
      "name": "Jessica",
      "n": 45851,
      "prop": 0.025436304942746
    },
    {
      "year": 1984,
      "sex": "F",
      "name": "Ashley",
      "n": 38759,
      "prop": 0.0215019463757801
    },
    {
      "year": 1984,
      "sex": "F",
      "name": "Amanda",
      "n": 33906,
      "prop": 0.0188096956530664
    },
    {
      "year": 1984,
      "sex": "F",
      "name": "Patricia",
      "n": 4475,
      "prop": 0.00248255140823075
    },
    {
      "year": 1984,
      "sex": "F",
      "name": "Linda",
      "n": 2334,
      "prop": 0.00129481005291857
    },
    {
      "year": 1984,
      "sex": "F",
      "name": "Deborah",
      "n": 1468,
      "prop": 0.000814387813917932
    },
    {
      "year": 1984,
      "sex": "F",
      "name": "Helen",
      "n": 859,
      "prop": 0.00047653891836206
    },
    {
      "year": 1984,
      "sex": "F",
      "name": "Dorothy",
      "n": 682,
      "prop": 0.000378346382215279
    },
    {
      "year": 1984,
      "sex": "F",
      "name": "Betty",
      "n": 503,
      "prop": 0.000279044325886049
    },
    {
      "year": 1985,
      "sex": "F",
      "name": "Jessica",
      "n": 48343,
      "prop": 0.0261934794528861
    },
    {
      "year": 1985,
      "sex": "F",
      "name": "Ashley",
      "n": 47007,
      "prop": 0.0254696003276962
    },
    {
      "year": 1985,
      "sex": "F",
      "name": "Amanda",
      "n": 39050,
      "prop": 0.0211582932924147
    },
    {
      "year": 1985,
      "sex": "F",
      "name": "Patricia",
      "n": 4398,
      "prop": 0.00238294939564762
    },
    {
      "year": 1985,
      "sex": "F",
      "name": "Linda",
      "n": 2113,
      "prop": 0.00114487768826817
    },
    {
      "year": 1985,
      "sex": "F",
      "name": "Deborah",
      "n": 1401,
      "prop": 0.000759097795202892
    },
    {
      "year": 1985,
      "sex": "F",
      "name": "Helen",
      "n": 809,
      "prop": 0.000438336985238501
    },
    {
      "year": 1985,
      "sex": "F",
      "name": "Dorothy",
      "n": 719,
      "prop": 0.000389572672912833
    },
    {
      "year": 1985,
      "sex": "F",
      "name": "Betty",
      "n": 502,
      "prop": 0.000271996497638724
    },
    {
      "year": 1986,
      "sex": "F",
      "name": "Jessica",
      "n": 52667,
      "prop": 0.0285499155975875
    },
    {
      "year": 1986,
      "sex": "F",
      "name": "Ashley",
      "n": 49674,
      "prop": 0.0269274594602799
    },
    {
      "year": 1986,
      "sex": "F",
      "name": "Amanda",
      "n": 40522,
      "prop": 0.0219663105900363
    },
    {
      "year": 1986,
      "sex": "F",
      "name": "Patricia",
      "n": 4246,
      "prop": 0.00230168685566591
    },
    {
      "year": 1986,
      "sex": "F",
      "name": "Linda",
      "n": 1951,
      "prop": 0.00105760505308624
    },
    {
      "year": 1986,
      "sex": "F",
      "name": "Deborah",
      "n": 1284,
      "prop": 0.000696035309155683
    },
    {
      "year": 1986,
      "sex": "F",
      "name": "Helen",
      "n": 766,
      "prop": 0.000415236017767331
    },
    {
      "year": 1986,
      "sex": "F",
      "name": "Dorothy",
      "n": 629,
      "prop": 0.000340970568114427
    },
    {
      "year": 1986,
      "sex": "F",
      "name": "Betty",
      "n": 407,
      "prop": 0.000220628014662277
    },
    {
      "year": 1987,
      "sex": "F",
      "name": "Jessica",
      "n": 55990,
      "prop": 0.0298840611579793
    },
    {
      "year": 1987,
      "sex": "F",
      "name": "Ashley",
      "n": 54845,
      "prop": 0.029272929705472
    },
    {
      "year": 1987,
      "sex": "F",
      "name": "Amanda",
      "n": 41786,
      "prop": 0.0223028287113293
    },
    {
      "year": 1987,
      "sex": "F",
      "name": "Patricia",
      "n": 3913,
      "prop": 0.00208852172372161
    },
    {
      "year": 1987,
      "sex": "F",
      "name": "Linda",
      "n": 1929,
      "prop": 0.00102958303221543
    },
    {
      "year": 1987,
      "sex": "F",
      "name": "Deborah",
      "n": 1203,
      "prop": 0.000642088329577588
    },
    {
      "year": 1987,
      "sex": "F",
      "name": "Helen",
      "n": 815,
      "prop": 0.000434997496762871
    },
    {
      "year": 1987,
      "sex": "F",
      "name": "Dorothy",
      "n": 614,
      "prop": 0.000327715905536691
    },
    {
      "year": 1987,
      "sex": "F",
      "name": "Betty",
      "n": 435,
      "prop": 0.000232176578026809
    },
    {
      "year": 1988,
      "sex": "F",
      "name": "Jessica",
      "n": 51532,
      "prop": 0.0268079862120844
    },
    {
      "year": 1988,
      "sex": "F",
      "name": "Ashley",
      "n": 49963,
      "prop": 0.025991760752821
    },
    {
      "year": 1988,
      "sex": "F",
      "name": "Amanda",
      "n": 39451,
      "prop": 0.0205232062418098
    },
    {
      "year": 1988,
      "sex": "F",
      "name": "Patricia",
      "n": 3798,
      "prop": 0.00197579623599892
    },
    {
      "year": 1988,
      "sex": "F",
      "name": "Linda",
      "n": 1844,
      "prop": 0.000959286008210115
    },
    {
      "year": 1988,
      "sex": "F",
      "name": "Deborah",
      "n": 1056,
      "prop": 0.000549352507955467
    },
    {
      "year": 1988,
      "sex": "F",
      "name": "Helen",
      "n": 775,
      "prop": 0.000403170637940802
    },
    {
      "year": 1988,
      "sex": "F",
      "name": "Dorothy",
      "n": 608,
      "prop": 0.000316293868216784
    },
    {
      "year": 1988,
      "sex": "F",
      "name": "Betty",
      "n": 395,
      "prop": 0.000205486970305312
    },
    {
      "year": 1989,
      "sex": "F",
      "name": "Jessica",
      "n": 47885,
      "prop": 0.0240412252916602
    },
    {
      "year": 1989,
      "sex": "F",
      "name": "Ashley",
      "n": 47585,
      "prop": 0.0238906067767286
    },
    {
      "year": 1989,
      "sex": "F",
      "name": "Amanda",
      "n": 36827,
      "prop": 0.0184894268312827
    },
    {
      "year": 1989,
      "sex": "F",
      "name": "Patricia",
      "n": 3606,
      "prop": 0.00181043454947743
    },
    {
      "year": 1989,
      "sex": "F",
      "name": "Linda",
      "n": 1844,
      "prop": 0.000925801805112695
    },
    {
      "year": 1989,
      "sex": "F",
      "name": "Deborah",
      "n": 1076,
      "prop": 0.000540218406887885
    },
    {
      "year": 1989,
      "sex": "F",
      "name": "Helen",
      "n": 857,
      "prop": 0.000430266890987842
    },
    {
      "year": 1989,
      "sex": "F",
      "name": "Dorothy",
      "n": 620,
      "prop": 0.000311278264191904
    },
    {
      "year": 1989,
      "sex": "F",
      "name": "Betty",
      "n": 399,
      "prop": 0.000200322624858983
    },
    {
      "year": 1990,
      "sex": "F",
      "name": "Jessica",
      "n": 46470,
      "prop": 0.0226274308541356
    },
    {
      "year": 1990,
      "sex": "F",
      "name": "Ashley",
      "n": 45553,
      "prop": 0.0221809201140185
    },
    {
      "year": 1990,
      "sex": "F",
      "name": "Amanda",
      "n": 34405,
      "prop": 0.0167526739517223
    },
    {
      "year": 1990,
      "sex": "F",
      "name": "Patricia",
      "n": 3578,
      "prop": 0.00174221965991171
    },
    {
      "year": 1990,
      "sex": "F",
      "name": "Linda",
      "n": 1658,
      "prop": 0.000807322581367696
    },
    {
      "year": 1990,
      "sex": "F",
      "name": "Deborah",
      "n": 1094,
      "prop": 0.000532696564545392
    },
    {
      "year": 1990,
      "sex": "F",
      "name": "Helen",
      "n": 861,
      "prop": 0.000419242908659582
    },
    {
      "year": 1990,
      "sex": "F",
      "name": "Dorothy",
      "n": 596,
      "prop": 0.000290207634798038
    },
    {
      "year": 1990,
      "sex": "F",
      "name": "Betty",
      "n": 406,
      "prop": 0.00019769177806712
    },
    {
      "year": 1991,
      "sex": "F",
      "name": "Ashley",
      "n": 43482,
      "prop": 0.0213883278618854
    },
    {
      "year": 1991,
      "sex": "F",
      "name": "Jessica",
      "n": 43394,
      "prop": 0.0213450416089107
    },
    {
      "year": 1991,
      "sex": "F",
      "name": "Amanda",
      "n": 28887,
      "prop": 0.0142092044281837
    },
    {
      "year": 1991,
      "sex": "F",
      "name": "Patricia",
      "n": 3418,
      "prop": 0.00168127741667642
    },
    {
      "year": 1991,
      "sex": "F",
      "name": "Linda",
      "n": 1608,
      "prop": 0.000790957895264976
    },
    {
      "year": 1991,
      "sex": "F",
      "name": "Deborah",
      "n": 1014,
      "prop": 0.00049877568768575
    },
    {
      "year": 1991,
      "sex": "F",
      "name": "Helen",
      "n": 773,
      "prop": 0.000380230381243673
    },
    {
      "year": 1991,
      "sex": "F",
      "name": "Dorothy",
      "n": 498,
      "prop": 0.000244960840697735
    },
    {
      "year": 1991,
      "sex": "F",
      "name": "Betty",
      "n": 345,
      "prop": 0.000169701787230359
    },
    {
      "year": 1992,
      "sex": "F",
      "name": "Ashley",
      "n": 38452,
      "prop": 0.0191860354880783
    },
    {
      "year": 1992,
      "sex": "F",
      "name": "Jessica",
      "n": 38352,
      "prop": 0.0191361394215848
    },
    {
      "year": 1992,
      "sex": "F",
      "name": "Amanda",
      "n": 25034,
      "prop": 0.0124909812859813
    },
    {
      "year": 1992,
      "sex": "F",
      "name": "Patricia",
      "n": 2951,
      "prop": 0.00147243292222301
    },
    {
      "year": 1992,
      "sex": "F",
      "name": "Linda",
      "n": 1580,
      "prop": 0.000788357850597206
    },
    {
      "year": 1992,
      "sex": "F",
      "name": "Deborah",
      "n": 919,
      "prop": 0.00045854485107521
    },
    {
      "year": 1992,
      "sex": "F",
      "name": "Helen",
      "n": 827,
      "prop": 0.000412640469901196
    },
    {
      "year": 1992,
      "sex": "F",
      "name": "Dorothy",
      "n": 508,
      "prop": 0.00025347201778695
    },
    {
      "year": 1992,
      "sex": "F",
      "name": "Betty",
      "n": 296,
      "prop": 0.000147692356820742
    },
    {
      "year": 1993,
      "sex": "F",
      "name": "Jessica",
      "n": 34987,
      "prop": 0.0177506267031079
    },
    {
      "year": 1993,
      "sex": "F",
      "name": "Ashley",
      "n": 34847,
      "prop": 0.0176795978141367
    },
    {
      "year": 1993,
      "sex": "F",
      "name": "Amanda",
      "n": 20809,
      "prop": 0.0105574296471538
    },
    {
      "year": 1993,
      "sex": "F",
      "name": "Patricia",
      "n": 2660,
      "prop": 0.00134954889045265
    },
    {
      "year": 1993,
      "sex": "F",
      "name": "Linda",
      "n": 1487,
      "prop": 0.000754428270715449
    },
    {
      "year": 1993,
      "sex": "F",
      "name": "Helen",
      "n": 868,
      "prop": 0.000440379111621392
    },
    {
      "year": 1993,
      "sex": "F",
      "name": "Deborah",
      "n": 797,
      "prop": 0.000404357317928858
    },
    {
      "year": 1993,
      "sex": "F",
      "name": "Dorothy",
      "n": 476,
      "prop": 0.000241498222502053
    },
    {
      "year": 1993,
      "sex": "F",
      "name": "Betty",
      "n": 292,
      "prop": 0.000148145968425629
    },
    {
      "year": 1994,
      "sex": "F",
      "name": "Jessica",
      "n": 32117,
      "prop": 0.0164797639663909
    },
    {
      "year": 1994,
      "sex": "F",
      "name": "Ashley",
      "n": 30278,
      "prop": 0.0155361426463986
    },
    {
      "year": 1994,
      "sex": "F",
      "name": "Amanda",
      "n": 18715,
      "prop": 0.00960297607594125
    },
    {
      "year": 1994,
      "sex": "F",
      "name": "Patricia",
      "n": 2363,
      "prop": 0.00121249438778783
    },
    {
      "year": 1994,
      "sex": "F",
      "name": "Linda",
      "n": 1281,
      "prop": 0.000657302289782567
    },
    {
      "year": 1994,
      "sex": "F",
      "name": "Helen",
      "n": 848,
      "prop": 0.000435122827272144
    },
    {
      "year": 1994,
      "sex": "F",
      "name": "Deborah",
      "n": 740,
      "prop": 0.000379706240779937
    },
    {
      "year": 1994,
      "sex": "F",
      "name": "Dorothy",
      "n": 442,
      "prop": 0.000226797511384773
    },
    {
      "year": 1994,
      "sex": "F",
      "name": "Betty",
      "n": 275,
      "prop": 0.00014110704893849
    },
    {
      "year": 1995,
      "sex": "F",
      "name": "Jessica",
      "n": 27935,
      "prop": 0.0145416403136851
    },
    {
      "year": 1995,
      "sex": "F",
      "name": "Ashley",
      "n": 26603,
      "prop": 0.0138482640868074
    },
    {
      "year": 1995,
      "sex": "F",
      "name": "Amanda",
      "n": 16345,
      "prop": 0.00850843425549248
    },
    {
      "year": 1995,
      "sex": "F",
      "name": "Patricia",
      "n": 2160,
      "prop": 0.0011243938814233
    },
    {
      "year": 1995,
      "sex": "F",
      "name": "Linda",
      "n": 1233,
      "prop": 0.000641841507312464
    },
    {
      "year": 1995,
      "sex": "F",
      "name": "Helen",
      "n": 837,
      "prop": 0.000435702629051527
    },
    {
      "year": 1995,
      "sex": "F",
      "name": "Deborah",
      "n": 660,
      "prop": 0.000343564797101562
    },
    {
      "year": 1995,
      "sex": "F",
      "name": "Dorothy",
      "n": 376,
      "prop": 0.000195727823803314
    },
    {
      "year": 1995,
      "sex": "F",
      "name": "Betty",
      "n": 234,
      "prop": 0.00012180933715419
    },
    {
      "year": 1996,
      "sex": "F",
      "name": "Jessica",
      "n": 24192,
      "prop": 0.012621838409999
    },
    {
      "year": 1996,
      "sex": "F",
      "name": "Ashley",
      "n": 23676,
      "prop": 0.0123526226105793
    },
    {
      "year": 1996,
      "sex": "F",
      "name": "Amanda",
      "n": 13973,
      "prop": 0.00729021776219062
    },
    {
      "year": 1996,
      "sex": "F",
      "name": "Patricia",
      "n": 1970,
      "prop": 0.00102782000941212
    },
    {
      "year": 1996,
      "sex": "F",
      "name": "Linda",
      "n": 987,
      "prop": 0.000514953476796833
    },
    {
      "year": 1996,
      "sex": "F",
      "name": "Helen",
      "n": 900,
      "prop": 0.000469562440848176
    },
    {
      "year": 1996,
      "sex": "F",
      "name": "Deborah",
      "n": 633,
      "prop": 0.000330258916729884
    },
    {
      "year": 1996,
      "sex": "F",
      "name": "Dorothy",
      "n": 350,
      "prop": 0.000182607615885402
    },
    {
      "year": 1996,
      "sex": "F",
      "name": "Betty",
      "n": 217,
      "prop": 0.000113216721848949
    },
    {
      "year": 1997,
      "sex": "F",
      "name": "Jessica",
      "n": 21043,
      "prop": 0.0110255841966801
    },
    {
      "year": 1997,
      "sex": "F",
      "name": "Ashley",
      "n": 20895,
      "prop": 0.0109480388627872
    },
    {
      "year": 1997,
      "sex": "F",
      "name": "Amanda",
      "n": 12239,
      "prop": 0.00641268473996901
    },
    {
      "year": 1997,
      "sex": "F",
      "name": "Patricia",
      "n": 1781,
      "prop": 0.000933163781508686
    },
    {
      "year": 1997,
      "sex": "F",
      "name": "Linda",
      "n": 1095,
      "prop": 0.00057373067981584
    },
    {
      "year": 1997,
      "sex": "F",
      "name": "Helen",
      "n": 812,
      "prop": 0.000425451426493573
    },
    {
      "year": 1997,
      "sex": "F",
      "name": "Deborah",
      "n": 638,
      "prop": 0.000334283263673522
    },
    {
      "year": 1997,
      "sex": "F",
      "name": "Dorothy",
      "n": 315,
      "prop": 0.000165045812001817
    },
    {
      "year": 1997,
      "sex": "F",
      "name": "Betty",
      "n": 189,
      "prop": 0.0000990274872010902
    },
    {
      "year": 1998,
      "sex": "F",
      "name": "Ashley",
      "n": 19871,
      "prop": 0.0102549361330773
    },
    {
      "year": 1998,
      "sex": "F",
      "name": "Jessica",
      "n": 18233,
      "prop": 0.00940960447458096
    },
    {
      "year": 1998,
      "sex": "F",
      "name": "Amanda",
      "n": 10908,
      "prop": 0.00562935148405249
    },
    {
      "year": 1998,
      "sex": "F",
      "name": "Patricia",
      "n": 1704,
      "prop": 0.000879392641073107
    },
    {
      "year": 1998,
      "sex": "F",
      "name": "Linda",
      "n": 970,
      "prop": 0.000500593228779879
    },
    {
      "year": 1998,
      "sex": "F",
      "name": "Helen",
      "n": 832,
      "prop": 0.000429374810664803
    },
    {
      "year": 1998,
      "sex": "F",
      "name": "Deborah",
      "n": 553,
      "prop": 0.00028538974795389
    },
    {
      "year": 1998,
      "sex": "F",
      "name": "Dorothy",
      "n": 312,
      "prop": 0.000161015553999301
    },
    {
      "year": 1998,
      "sex": "F",
      "name": "Betty",
      "n": 194,
      "prop": 0.000100118645755976
    },
    {
      "year": 1999,
      "sex": "F",
      "name": "Ashley",
      "n": 18132,
      "prop": 0.00931837897619116
    },
    {
      "year": 1999,
      "sex": "F",
      "name": "Jessica",
      "n": 16346,
      "prop": 0.0084005196748743
    },
    {
      "year": 1999,
      "sex": "F",
      "name": "Amanda",
      "n": 9741,
      "prop": 0.00500608480074333
    },
    {
      "year": 1999,
      "sex": "F",
      "name": "Patricia",
      "n": 1532,
      "prop": 0.000787323879964971
    },
    {
      "year": 1999,
      "sex": "F",
      "name": "Linda",
      "n": 898,
      "prop": 0.000461499245566935
    },
    {
      "year": 1999,
      "sex": "F",
      "name": "Helen",
      "n": 841,
      "prop": 0.000432205863610014
    },
    {
      "year": 1999,
      "sex": "F",
      "name": "Deborah",
      "n": 524,
      "prop": 0.000269293546410995
    },
    {
      "year": 1999,
      "sex": "F",
      "name": "Dorothy",
      "n": 335,
      "prop": 0.000172162858869625
    },
    {
      "year": 1999,
      "sex": "F",
      "name": "Betty",
      "n": 182,
      "prop": 0.0000935332546694679
    },
    {
      "year": 2000,
      "sex": "F",
      "name": "Ashley",
      "n": 17997,
      "prop": 0.00902349055709788
    },
    {
      "year": 2000,
      "sex": "F",
      "name": "Jessica",
      "n": 15705,
      "prop": 0.00787430789571719
    },
    {
      "year": 2000,
      "sex": "F",
      "name": "Amanda",
      "n": 8550,
      "prop": 0.00428687249337039
    },
    {
      "year": 2000,
      "sex": "F",
      "name": "Patricia",
      "n": 1392,
      "prop": 0.000697932925236442
    },
    {
      "year": 2000,
      "sex": "F",
      "name": "Helen",
      "n": 890,
      "prop": 0.000446235850187093
    },
    {
      "year": 2000,
      "sex": "F",
      "name": "Linda",
      "n": 849,
      "prop": 0.000425678917762744
    },
    {
      "year": 2000,
      "sex": "F",
      "name": "Deborah",
      "n": 545,
      "prop": 0.00027325678466513
    },
    {
      "year": 2000,
      "sex": "F",
      "name": "Dorothy",
      "n": 312,
      "prop": 0.000156433241863341
    },
    {
      "year": 2000,
      "sex": "F",
      "name": "Betty",
      "n": 174,
      "prop": 0.0000872416156545553
    },
    {
      "year": 2001,
      "sex": "F",
      "name": "Ashley",
      "n": 16524,
      "prop": 0.00834726311913036
    },
    {
      "year": 2001,
      "sex": "F",
      "name": "Jessica",
      "n": 13917,
      "prop": 0.00703031111286233
    },
    {
      "year": 2001,
      "sex": "F",
      "name": "Amanda",
      "n": 6963,
      "prop": 0.00351742877623485
    },
    {
      "year": 2001,
      "sex": "F",
      "name": "Patricia",
      "n": 1223,
      "prop": 0.000617810626645874
    },
    {
      "year": 2001,
      "sex": "F",
      "name": "Helen",
      "n": 884,
      "prop": 0.000446561401434957
    },
    {
      "year": 2001,
      "sex": "F",
      "name": "Linda",
      "n": 837,
      "prop": 0.000422818883485361
    },
    {
      "year": 2001,
      "sex": "F",
      "name": "Deborah",
      "n": 489,
      "prop": 0.000247023218667075
    },
    {
      "year": 2001,
      "sex": "F",
      "name": "Dorothy",
      "n": 317,
      "prop": 0.00016013570617068
    },
    {
      "year": 2001,
      "sex": "F",
      "name": "Betty",
      "n": 153,
      "prop": 0.0000772894733252811
    },
    {
      "year": 2002,
      "sex": "F",
      "name": "Ashley",
      "n": 15339,
      "prop": 0.00777226488632702
    },
    {
      "year": 2002,
      "sex": "F",
      "name": "Jessica",
      "n": 11913,
      "prop": 0.00603631211883524
    },
    {
      "year": 2002,
      "sex": "F",
      "name": "Amanda",
      "n": 6132,
      "prop": 0.00310708183603607
    },
    {
      "year": 2002,
      "sex": "F",
      "name": "Patricia",
      "n": 1113,
      "prop": 0.000563956634622985
    },
    {
      "year": 2002,
      "sex": "F",
      "name": "Helen",
      "n": 875,
      "prop": 0.000443362134137567
    },
    {
      "year": 2002,
      "sex": "F",
      "name": "Linda",
      "n": 769,
      "prop": 0.000389651978459187
    },
    {
      "year": 2002,
      "sex": "F",
      "name": "Deborah",
      "n": 474,
      "prop": 0.000240175601807093
    },
    {
      "year": 2002,
      "sex": "F",
      "name": "Dorothy",
      "n": 263,
      "prop": 0.000133261990032206
    },
    {
      "year": 2002,
      "sex": "F",
      "name": "Betty",
      "n": 127,
      "prop": 0.0000643508468976811
    },
    {
      "year": 2003,
      "sex": "F",
      "name": "Ashley",
      "n": 14512,
      "prop": 0.00723815072032368
    },
    {
      "year": 2003,
      "sex": "F",
      "name": "Jessica",
      "n": 10445,
      "prop": 0.00520965299571257
    },
    {
      "year": 2003,
      "sex": "F",
      "name": "Amanda",
      "n": 5339,
      "prop": 0.00266293320671225
    },
    {
      "year": 2003,
      "sex": "F",
      "name": "Patricia",
      "n": 1011,
      "prop": 0.000504256503462462
    },
    {
      "year": 2003,
      "sex": "F",
      "name": "Helen",
      "n": 783,
      "prop": 0.000390536935916031
    },
    {
      "year": 2003,
      "sex": "F",
      "name": "Linda",
      "n": 739,
      "prop": 0.000368591054459702
    },
    {
      "year": 2003,
      "sex": "F",
      "name": "Deborah",
      "n": 421,
      "prop": 0.000209982183934418
    },
    {
      "year": 2003,
      "sex": "F",
      "name": "Dorothy",
      "n": 291,
      "prop": 0.000145142079631628
    },
    {
      "year": 2003,
      "sex": "F",
      "name": "Betty",
      "n": 142,
      "prop": 0.0000708253446999699
    },
    {
      "year": 2004,
      "sex": "F",
      "name": "Ashley",
      "n": 14370,
      "prop": 0.00712775344818093
    },
    {
      "year": 2004,
      "sex": "F",
      "name": "Jessica",
      "n": 9469,
      "prop": 0.00469677782886745
    },
    {
      "year": 2004,
      "sex": "F",
      "name": "Amanda",
      "n": 4677,
      "prop": 0.00231986798031609
    },
    {
      "year": 2004,
      "sex": "F",
      "name": "Patricia",
      "n": 997,
      "prop": 0.000494528196787501
    },
    {
      "year": 2004,
      "sex": "F",
      "name": "Helen",
      "n": 860,
      "prop": 0.000426573971150703
    },
    {
      "year": 2004,
      "sex": "F",
      "name": "Linda",
      "n": 727,
      "prop": 0.000360603810496001
    },
    {
      "year": 2004,
      "sex": "F",
      "name": "Deborah",
      "n": 427,
      "prop": 0.000211798936838779
    },
    {
      "year": 2004,
      "sex": "F",
      "name": "Dorothy",
      "n": 288,
      "prop": 0.000142852678710933
    },
    {
      "year": 2004,
      "sex": "F",
      "name": "Betty",
      "n": 136,
      "prop": 0.000067458209391274
    },
    {
      "year": 2005,
      "sex": "F",
      "name": "Ashley",
      "n": 13270,
      "prop": 0.00654498034039816
    },
    {
      "year": 2005,
      "sex": "F",
      "name": "Jessica",
      "n": 8108,
      "prop": 0.00399899778447237
    },
    {
      "year": 2005,
      "sex": "F",
      "name": "Amanda",
      "n": 4088,
      "prop": 0.00201626824653713
    },
    {
      "year": 2005,
      "sex": "F",
      "name": "Helen",
      "n": 960,
      "prop": 0.000473487650850206
    },
    {
      "year": 2005,
      "sex": "F",
      "name": "Patricia",
      "n": 877,
      "prop": 0.000432550697703782
    },
    {
      "year": 2005,
      "sex": "F",
      "name": "Linda",
      "n": 745,
      "prop": 0.000367446145711879
    },
    {
      "year": 2005,
      "sex": "F",
      "name": "Deborah",
      "n": 425,
      "prop": 0.00020961692876181
    },
    {
      "year": 2005,
      "sex": "F",
      "name": "Dorothy",
      "n": 234,
      "prop": 0.000115412614894738
    },
    {
      "year": 2005,
      "sex": "F",
      "name": "Betty",
      "n": 132,
      "prop": 0.0000651045519919034
    },
    {
      "year": 2006,
      "sex": "F",
      "name": "Ashley",
      "n": 12340,
      "prop": 0.00590922303294464
    },
    {
      "year": 2006,
      "sex": "F",
      "name": "Jessica",
      "n": 6809,
      "prop": 0.00326060774970179
    },
    {
      "year": 2006,
      "sex": "F",
      "name": "Amanda",
      "n": 3355,
      "prop": 0.00160659994129086
    },
    {
      "year": 2006,
      "sex": "F",
      "name": "Helen",
      "n": 948,
      "prop": 0.000453966242725406
    },
    {
      "year": 2006,
      "sex": "F",
      "name": "Patricia",
      "n": 775,
      "prop": 0.000371122192101466
    },
    {
      "year": 2006,
      "sex": "F",
      "name": "Linda",
      "n": 698,
      "prop": 0.000334249406563643
    },
    {
      "year": 2006,
      "sex": "F",
      "name": "Deborah",
      "n": 423,
      "prop": 0.000202560886785704
    },
    {
      "year": 2006,
      "sex": "F",
      "name": "Dorothy",
      "n": 265,
      "prop": 0.000126899846331469
    },
    {
      "year": 2006,
      "sex": "F",
      "name": "Betty",
      "n": 135,
      "prop": 0.0000646470915273522
    },
    {
      "year": 2007,
      "sex": "F",
      "name": "Ashley",
      "n": 11423,
      "prop": 0.00540374075290008
    },
    {
      "year": 2007,
      "sex": "F",
      "name": "Jessica",
      "n": 5704,
      "prop": 0.00269832244196289
    },
    {
      "year": 2007,
      "sex": "F",
      "name": "Amanda",
      "n": 3038,
      "prop": 0.00143714999626284
    },
    {
      "year": 2007,
      "sex": "F",
      "name": "Helen",
      "n": 931,
      "prop": 0.000440416934338613
    },
    {
      "year": 2007,
      "sex": "F",
      "name": "Patricia",
      "n": 725,
      "prop": 0.000342967000424806
    },
    {
      "year": 2007,
      "sex": "F",
      "name": "Linda",
      "n": 659,
      "prop": 0.000311745176937858
    },
    {
      "year": 2007,
      "sex": "F",
      "name": "Deborah",
      "n": 371,
      "prop": 0.000175504492631177
    },
    {
      "year": 2007,
      "sex": "F",
      "name": "Dorothy",
      "n": 262,
      "prop": 0.000123941178084551
    },
    {
      "year": 2007,
      "sex": "F",
      "name": "Betty",
      "n": 134,
      "prop": 0.0000633897628371366
    },
    {
      "year": 2008,
      "sex": "F",
      "name": "Ashley",
      "n": 9402,
      "prop": 0.00452030531532519
    },
    {
      "year": 2008,
      "sex": "F",
      "name": "Jessica",
      "n": 4732,
      "prop": 0.00227505687642191
    },
    {
      "year": 2008,
      "sex": "F",
      "name": "Amanda",
      "n": 2439,
      "prop": 0.00117262546948289
    },
    {
      "year": 2008,
      "sex": "F",
      "name": "Helen",
      "n": 884,
      "prop": 0.000425010625265632
    },
    {
      "year": 2008,
      "sex": "F",
      "name": "Patricia",
      "n": 629,
      "prop": 0.000302411406439007
    },
    {
      "year": 2008,
      "sex": "F",
      "name": "Linda",
      "n": 611,
      "prop": 0.000293757343933598
    },
    {
      "year": 2008,
      "sex": "F",
      "name": "Deborah",
      "n": 355,
      "prop": 0.000170677343856673
    },
    {
      "year": 2008,
      "sex": "F",
      "name": "Dorothy",
      "n": 242,
      "prop": 0.000116349062572718
    },
    {
      "year": 2008,
      "sex": "F",
      "name": "Betty",
      "n": 137,
      "prop": 0.0000658670312911669
    },
    {
      "year": 2009,
      "sex": "F",
      "name": "Ashley",
      "n": 7811,
      "prop": 0.00386339097012116
    },
    {
      "year": 2009,
      "sex": "F",
      "name": "Jessica",
      "n": 3793,
      "prop": 0.00187605197153624
    },
    {
      "year": 2009,
      "sex": "F",
      "name": "Amanda",
      "n": 1952,
      "prop": 0.000965476785773462
    },
    {
      "year": 2009,
      "sex": "F",
      "name": "Helen",
      "n": 826,
      "prop": 0.000408547041520942
    },
    {
      "year": 2009,
      "sex": "F",
      "name": "Patricia",
      "n": 564,
      "prop": 0.000278959481135365
    },
    {
      "year": 2009,
      "sex": "F",
      "name": "Linda",
      "n": 550,
      "prop": 0.000272034955007891
    },
    {
      "year": 2009,
      "sex": "F",
      "name": "Deborah",
      "n": 346,
      "prop": 0.000171134717150419
    },
    {
      "year": 2009,
      "sex": "F",
      "name": "Dorothy",
      "n": 226,
      "prop": 0.000111781636057788
    },
    {
      "year": 2009,
      "sex": "F",
      "name": "Betty",
      "n": 148,
      "prop": 0.0000732021333475781
    },
    {
      "year": 2010,
      "sex": "F",
      "name": "Ashley",
      "n": 6306,
      "prop": 0.00322252105804575
    },
    {
      "year": 2010,
      "sex": "F",
      "name": "Jessica",
      "n": 3195,
      "prop": 0.00163272356175962
    },
    {
      "year": 2010,
      "sex": "F",
      "name": "Amanda",
      "n": 1655,
      "prop": 0.000845745694745594
    },
    {
      "year": 2010,
      "sex": "F",
      "name": "Helen",
      "n": 703,
      "prop": 0.000359250286046014
    },
    {
      "year": 2010,
      "sex": "F",
      "name": "Patricia",
      "n": 479,
      "prop": 0.000244780778116701
    },
    {
      "year": 2010,
      "sex": "F",
      "name": "Linda",
      "n": 476,
      "prop": 0.00024324770434979
    },
    {
      "year": 2010,
      "sex": "F",
      "name": "Deborah",
      "n": 354,
      "prop": 0.000180902704495432
    },
    {
      "year": 2010,
      "sex": "F",
      "name": "Dorothy",
      "n": 240,
      "prop": 0.000122645901352835
    },
    {
      "year": 2010,
      "sex": "F",
      "name": "Betty",
      "n": 132,
      "prop": 0.0000674552457440595
    },
    {
      "year": 2011,
      "sex": "F",
      "name": "Ashley",
      "n": 5398,
      "prop": 0.00279205644940212
    },
    {
      "year": 2011,
      "sex": "F",
      "name": "Jessica",
      "n": 2620,
      "prop": 0.00135516633890952
    },
    {
      "year": 2011,
      "sex": "F",
      "name": "Amanda",
      "n": 1409,
      "prop": 0.000728789836459354
    },
    {
      "year": 2011,
      "sex": "F",
      "name": "Helen",
      "n": 729,
      "prop": 0.000377067275215663
    },
    {
      "year": 2011,
      "sex": "F",
      "name": "Linda",
      "n": 488,
      "prop": 0.000252412661598414
    },
    {
      "year": 2011,
      "sex": "F",
      "name": "Patricia",
      "n": 427,
      "prop": 0.000220861078898612
    },
    {
      "year": 2011,
      "sex": "F",
      "name": "Deborah",
      "n": 332,
      "prop": 0.000171723368136626
    },
    {
      "year": 2011,
      "sex": "F",
      "name": "Dorothy",
      "n": 276,
      "prop": 0.000142757980740086
    },
    {
      "year": 2011,
      "sex": "F",
      "name": "Betty",
      "n": 167,
      "prop": 0.0000863789231289653
    },
    {
      "year": 2012,
      "sex": "F",
      "name": "Ashley",
      "n": 4696,
      "prop": 0.00242806420306393
    },
    {
      "year": 2012,
      "sex": "F",
      "name": "Jessica",
      "n": 2327,
      "prop": 0.00120317406314518
    },
    {
      "year": 2012,
      "sex": "F",
      "name": "Amanda",
      "n": 1228,
      "prop": 0.00063493672090343
    },
    {
      "year": 2012,
      "sex": "F",
      "name": "Helen",
      "n": 772,
      "prop": 0.000399162173076098
    },
    {
      "year": 2012,
      "sex": "F",
      "name": "Linda",
      "n": 448,
      "prop": 0.000231638152251414
    },
    {
      "year": 2012,
      "sex": "F",
      "name": "Patricia",
      "n": 394,
      "prop": 0.000203717482113967
    },
    {
      "year": 2012,
      "sex": "F",
      "name": "Deborah",
      "n": 336,
      "prop": 0.000173728614188561
    },
    {
      "year": 2012,
      "sex": "F",
      "name": "Dorothy",
      "n": 277,
      "prop": 0.000143222696816165
    },
    {
      "year": 2012,
      "sex": "F",
      "name": "Betty",
      "n": 140,
      "prop": 0.000072386922578567
    },
    {
      "year": 2013,
      "sex": "F",
      "name": "Ashley",
      "n": 3936,
      "prop": 0.00204898297876106
    },
    {
      "year": 2013,
      "sex": "F",
      "name": "Jessica",
      "n": 1946,
      "prop": 0.00101303884061713
    },
    {
      "year": 2013,
      "sex": "F",
      "name": "Amanda",
      "n": 1064,
      "prop": 0.000553891740193539
    },
    {
      "year": 2013,
      "sex": "F",
      "name": "Helen",
      "n": 738,
      "prop": 0.000384184308517699
    },
    {
      "year": 2013,
      "sex": "F",
      "name": "Linda",
      "n": 441,
      "prop": 0.000229573550211796
    },
    {
      "year": 2013,
      "sex": "F",
      "name": "Patricia",
      "n": 419,
      "prop": 0.000218120901448396
    },
    {
      "year": 2013,
      "sex": "F",
      "name": "Dorothy",
      "n": 334,
      "prop": 0.000173872031226167
    },
    {
      "year": 2013,
      "sex": "F",
      "name": "Deborah",
      "n": 329,
      "prop": 0.000171269156507213
    },
    {
      "year": 2013,
      "sex": "F",
      "name": "Betty",
      "n": 174,
      "prop": 0.0000905800402196202
    },
    {
      "year": 2014,
      "sex": "F",
      "name": "Ashley",
      "n": 3547,
      "prop": 0.00182125980653672
    },
    {
      "year": 2014,
      "sex": "F",
      "name": "Jessica",
      "n": 1790,
      "prop": 0.000919102073217006
    },
    {
      "year": 2014,
      "sex": "F",
      "name": "Amanda",
      "n": 1048,
      "prop": 0.000538111157950515
    },
    {
      "year": 2014,
      "sex": "F",
      "name": "Helen",
      "n": 801,
      "prop": 0.000411285341143476
    },
    {
      "year": 2014,
      "sex": "F",
      "name": "Linda",
      "n": 470,
      "prop": 0.000241328477325136
    },
    {
      "year": 2014,
      "sex": "F",
      "name": "Dorothy",
      "n": 382,
      "prop": 0.000196143570932344
    },
    {
      "year": 2014,
      "sex": "F",
      "name": "Patricia",
      "n": 377,
      "prop": 0.000193576246705481
    },
    {
      "year": 2014,
      "sex": "F",
      "name": "Deborah",
      "n": 369,
      "prop": 0.0001894685279425
    },
    {
      "year": 2014,
      "sex": "F",
      "name": "Betty",
      "n": 193,
      "prop": 0.0000990987151569174
    },
    {
      "year": 2015,
      "sex": "F",
      "name": "Ashley",
      "n": 3409,
      "prop": 0.00176165787043521
    },
    {
      "year": 2015,
      "sex": "F",
      "name": "Jessica",
      "n": 1577,
      "prop": 0.000814941173856356
    },
    {
      "year": 2015,
      "sex": "F",
      "name": "Amanda",
      "n": 1013,
      "prop": 0.000523484723599549
    },
    {
      "year": 2015,
      "sex": "F",
      "name": "Helen",
      "n": 757,
      "prop": 0.000391192434121282
    },
    {
      "year": 2015,
      "sex": "F",
      "name": "Linda",
      "n": 423,
      "prop": 0.000218592337692605
    },
    {
      "year": 2015,
      "sex": "F",
      "name": "Dorothy",
      "n": 395,
      "prop": 0.00020412286853092
    },
    {
      "year": 2015,
      "sex": "F",
      "name": "Deborah",
      "n": 346,
      "prop": 0.00017880129749797
    },
    {
      "year": 2015,
      "sex": "F",
      "name": "Patricia",
      "n": 346,
      "prop": 0.00017880129749797
    },
    {
      "year": 2015,
      "sex": "F",
      "name": "Betty",
      "n": 186,
      "prop": 0.0000961186165740535
    }
  ]
  public svg: any;
  public xAxis: any;
  public yAxis: any;
  constructor(public chartElem: ElementRef) {

  }

  ngOnInit(): void {
    this.initializeChart();
    this.drawChart();
  }

  private initializeChart(): void {
    const margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  this.svg = d3.select("#my_dataviz")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
      `translate(${margin.left},${margin.top})`);


    const minMaxXArr = d3.extent(this.data, function(d): number { return d.year; });
    // Add X axis --> it is a date format
    this.xAxis = d3.scaleLinear()
    .domain([minMaxXArr[0] || 0, minMaxXArr[1] || 3000])
    .range([ 0, width ]);
    this.svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(this.xAxis).ticks(5));

    const maxY = d3.max(this.data, function(d) { return +d.n; })  
    // Add Y axis
    this.yAxis = d3.scaleLinear()
      .domain([0, maxY||1000])
      .range([ height, 0 ]);
    this.svg.append("g")
      .call(d3.axisLeft(this.yAxis));
  }
  /*
  private d3Nest(inputAr: Array<any>) {
    return Array.from(d3.group(inputAr, d => d.name), ([key, value]) => ({key, value}));
  }
  */

  private drawChart(): void {
    // group the data: I want to draw one line per group
    const sumstat = d3.group(this.data, d => d.name);
    console.log(sumstat);
    // color palette
    const color = d3.scaleOrdinal()
      .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'])

    const _self = this;
    // Draw the line
    this.svg.selectAll(".line")
    .data(sumstat)
    .enter()
    .append("path")
      .attr("fill", "none")
      .attr("stroke", function(d: any){ return color(d[0]) })
      .attr("stroke-width", 1.5)
      .attr("d", function(d: any){
        return d3.line()
          .x(function(d: any) { return _self.xAxis(d.year); })
          .y(function(d: any) { return _self.yAxis(+d.n); })
          (d[1])
      });
  }
}
