async function movieSearch(){
    var movieName = document.getElementById("movieName").value.replaceAll(' ','+');
    var url = "https://www.omdbapi.com/?t=";
    var key = "&apikey=50026ec7";
    var url = await fetch(url+movieName+key+"&plot=full");
    var response = await url.json();
    if(response.Response=='True'){
        document.getElementById('title').innerHTML = response.Title;
        document.getElementById('genre').innerHTML = response.Genre;
        document.getElementById('relDate').innerHTML = response.Released;
        document.getElementById('runTime').innerHTML = response.Runtime;
        document.getElementById('director').innerHTML = response.Director;
        document.getElementById('actor').innerHTML = response.Actors;
        document.getElementById('plot').innerHTML = response.Plot;
        document.getElementById('rating').innerHTML = response.imdbRating;
        document.getElementById('country').innerHTML = response.Country;
        document.getElementById('genre').innerHTML = response.Genre;
        if(response.Poster!="N/A"){
            document.getElementById('poster').setAttribute('src',response.Poster);
        }
    }
    else{
        document.getElementById('outer').style.display="block";
    }
}

//Hindi Movie Data
var hindiMovie = ["tt1187043", "tt0986264", "tt2338151", "tt5074352", "tt0405508", "tt8110330", "tt0169102", "tt1188996", "tt1954470", "tt0367110", "tt2082197", "tt8108198", "tt0871510", "tt0374887", "tt1280558", "tt3863552", "tt4430212", "tt1562872", "tt0292490", "tt7886848", "tt0347304", "tt2356180", "tt3322420", "tt1821480", "tt0242519", "tt2574698", "tt1166100", "tt10280276", "tt5461944", "tt4387040", "tt2283748", "tt2176013", "tt2377938", "tt2350496", "tt3390572", "tt1285241", "tt0420332", "tt2112124", "tt1093370", "tt6452574", "tt10350922", "tt0248126", "tt6571548", "tt8291224", "tt1182937", "tt0456144", "tt1833673", "tt1639426", "tt4169250", "tt3405236", "tt2317337", "tt1839596", "tt1787988", "tt1024943", "tt2178470", "tt1562871", "tt5946128", "tt9052870", "tt7431594", "tt2181931", "tt1620933", "tt0375611", "tt2213054", "tt2395469", "tt0347473", "tt4535650", "tt3735246", "tt4934950", "tt0439662", "tt0449994", "tt7212754", "tt2359810", "tt8239946", "tt3767372", "tt2016894", "tt1327035", "tt8108202", "tt1324059", "tt7725596", "tt1620719", "tt5935704", "tt0213890", "tt4434004", "tt2203308", "tt8983202", "tt2140465", "tt7098658", "tt2556308", "tt0473367", "tt9614460", "tt10350626", "tt5460276", "tt10324144", "tt4635372", "tt2372222", "tt0441048", "tt3148502", "tt5764096", "tt5165344", "tt2372678", "tt4900716", "tt0265343", "tt8130968", "tt2855648", "tt2424988", "tt1849718", "tt5982852", "tt0466460", "tt5956100", "tt0499375", "tt0995031", "tt3678782", "tt7218518", "tt7485048", "tt8108274", "tt0254481", "tt5080556", "tt4559006", "tt6108090", "tt6826438", "tt5286444", "tt0323013", "tt1230165", "tt1029231", "tt0795434", "tt2077833", "tt2882328", "tt3447364", "tt1926313", "tt7430722", "tt6967980", "tt7581902", "tt0488414", "tt0400234", "tt1434447", "tt5997666", "tt2215477", "tt0432637", "tt0419058", "tt0449999", "tt0422091", "tt5785170", "tt7721800", "tt3495030", "tt2621000", "tt3449292", "tt5970844", "tt3595298", "tt1438298", "tt6484982", "tt1188982", "tt3175038", "tt7255568", "tt1274295", "tt1291465", "tt1395054", "tt0374271", "tt1292703", "tt0453729", "tt0373856", "tt0432047", "tt2172071", "tt2112131", "tt7363104", "tt7363076", "tt8983164", "tt2181831", "tt4110568", "tt1610452", "tt1375789", "tt0495034", "tt0337578", "tt1708532", "tt12567088", "tt0347332", "tt1275863", "tt7212726", "tt6264938", "tt0319736", "tt8504014", "tt0296574", "tt5882970", "tt0346723", "tt0291376", "tt1948150", "tt1146325", "tt10515526", "tt0453671", "tt4430136", "tt1261047", "tt1185420", "tt0234000", "tt0418362", "tt3173910", "tt1694542", "tt7919680", "tt0845448", "tt0806088", "tt5713232", "tt0371735", "tt2168910", "tt0378072", "tt1980986", "tt0249371", "tt5662932", "tt1985981", "tt7469726", "tt1573072", "tt1252596", "tt0451850", "tt1433810", "tt0306434", "tt8144834", "tt3742284", "tt6299040", "tt9248972", "tt9420648", "tt1447508", "tt4814290", "tt5842616", "tt11651796", "tt0964516", "tt3495000", "tt1077248", "tt10230426", "tt1572311", "tt2436516", "tt6988116", "tt3678938", "tt2229842", "tt5310090", "tt1532957", "tt1014672", "tt0807758", "tt0805184", "tt0800956", "tt4107858", "tt8907986", "tt1734110", "tt10333912", "tt6588966", "tt1230448", "tt0451833", "tt1373156", "tt1241195", "tt3859980", "tt7059844", "tt2806788", "tt6277440", "tt7027278", "tt6692354", "tt1182972", "tt1328634", "tt3614516", "tt5255710", "tt1629391", "tt7721946", "tt0284137", "tt1345777", "tt3001638", "tt6903440", "tt8439854", "tt3771536", "tt8869978", "tt12393526", "tt0379370", "tt2072227", "tt1455811", "tt9614452", "tt0418460", "tt0886539", "tt8366590", "tt0151150", "tt0811066", "tt0346457", "tt0390614", "tt6843812", "tt7638344", "tt4129428", "tt5456546", "tt8108268", "tt0476884", "tt0494290", "tt1954598", "tt2178508", "tt8108200", "tt6971752", "tt1740710", "tt0464160", "tt1954206", "tt0437407", "tt1535467", "tt9877170", "tt0382383", "tt4921860", "tt4559046", "tt0991346", "tt0402014", "tt1806913", "tt1728986", "tt10964468", "tt3142232", "tt1836912", "tt0278291", "tt2988272", "tt2344678", "tt1091229", "tt2762334", "tt10309906", "tt5668770", "tt10885444", "tt3554418", "tt3696192", "tt4864932", "tt2978626", "tt3036740", "tt0319020", "tt1667838", "tt0299108", "tt2309764", "tt1255951", "tt1562859", "tt8902990", "tt3410408", "tt0451919", "tt7853242", "tt0920464", "tt0758053", "tt6040012", "tt1185412", "tt5474036", "tt7147540", "tt8907992", "tt0490210", "tt1841542", "tt2976182", "tt1043451", "tt1992138", "tt1395025", "tt8647400", "tt7399470", "tt1092005", "tt5108476", "tt0437238", "tt6129302", "tt3836958", "tt0222270", "tt3679060", "tt2675978", "tt2308773", "tt0352314", "tt0456165", "tt0255111", "tt10023024", "tt0995740", "tt1891884", "tt7180544", "tt0443708", "tt0330843", "tt1144804", "tt1020937", "tt0473310", "tt1918965", "tt6580564", "tt0222024", "tt5474042", "tt0448206", "tt0248185", "tt1703958", "tt8055888", "tt2166214", "tt1602476", "tt1907761", "tt2321163", "tt1499201", "tt2301155", "tt5197544", "tt10930586", "tt4807830", "tt6986710", "tt9248952", "tt5121000", "tt8202612", "tt1385824", "tt1288638", "tt2106537", "tt0406977", "tt0476805", "tt1216300", "tt1266583", "tt9680136", "tt0476527", "tt9569610", "tt5005684", "tt2476154", "tt5542802", "tt6170954", "tt0824316", "tt1396208", "tt9648672", "tt9558612", "tt10098288", "tt4333674", "tt1433905", "tt4302956", "tt2979920", "tt3679000", "tt7805960", "tt3159708", "tt1629376", "tt8747450", "tt0495032", "tt7639372", "tt2369154", "tt3398052", "tt11142762", "tt3483612", "tt1105709", "tt4744086", "tt2576450", "tt8108196", "tt1608777", "tt0995035", "tt1105733", "tt4906984", "tt2319889", "tt1578116", "tt10483386", "tt8983166", "tt1627924", "tt1773015", "tt0485272", "tt4007558", "tt1714832", "tt0272736", "tt1918886", "tt1848771", "tt2122340", "tt5477608", "tt5613834", "tt2797242", "tt4020624", "tt10230422", "tt5472758", "tt8550208", "tt0415908", "tt0995752", "tt0976026", "tt5156746", "tt2229848", "tt3531852", "tt2275802", "tt9635540", "tt4683366", "tt3043252", "tt11046300", "tt11229134", "tt11112526", "tt0227194", "tt0995718", "tt6712014", "tt9176296", "tt1185442", "tt2246724", "tt6514196", "tt3709344", "tt11651780", "tt0411469", "tt2635622", "tt6791730", "tt0294662", "tt2658126", "tt0451803", "tt0331639", "tt7720922", "tt7690638", "tt0444781", "tt3337550", "tt10230404", "tt2323964", "tt4399594", "tt1754920", "tt2615584", "tt3019620", "tt4906960", "tt0833553", "tt5120640", "tt0265148", "tt0451631", "tt0477252", "tt5472374", "tt8176040", "tt0256692", "tt5600714", "tt1334470", "tt0232079", "tt0486615", "tt10243678", "tt2341766", "tt10463030", "tt8108206", "tt1784589", "tt5290620", "tt0405266", "tt1949548", "tt2130242", "tt0250415", "tt6774212", "tt1773109", "tt1578261", "tt3483712", "tt5235880", "tt2073070", "tt6467380", "tt1105747", "tt2406676", "tt9052960", "tt1664809", "tt2804026", "tt0444840", "tt1101665", "tt8472964", "tt3698454", "tt3483646", "tt0362771", "tt3380264", "tt1202540", "tt3302962", "tt2354407", "tt0248012", "tt2057441", "tt8108164", "tt1618430", "tt6923462", "tt2362778", "tt5764024", "tt7946836", "tt1805263", "tt0476550", "tt2551378", "tt10543680", "tt8396128", "tt0405507", "tt2027138", "tt2361746", "tt1727496", "tt2064849", "tt2186933", "tt7881550", "tt2408040", "tt2392447", "tt4088588", "tt0451787", "tt1728239", "tt1580704", "tt5502766", "tt6272828", "tt2929690", "tt10840884", "tt2140315", "tt2309987", "tt2357926", "tt1916728", "tt0415003", "tt0341266", "tt1708453", "tt3017412", "tt1340838", "tt4323504", "tt13143988", "tt2417560", "tt6642396", "tt0248617", "tt0449306", "tt0488906", "tt2226666", "tt0456500", "tt0290326", "tt6405126", "tt0459605", "tt0326983", "tt0415768", "tt0349333", "tt0326576", "tt0770214", "tt3382148", "tt0419468", "tt1221139", "tt2292625", "tt14260080", "tt10443846", "tt1884268", "tt9248934", "tt1629715", "tt0247992", "tt0307873", "tt0480572", "tt1301698", "tt1351224", "tt4865436", "tt1158700", "tt3398048", "tt0986213", "tt7777196", "tt5954088", "tt1667076", "tt1428459", "tt6117702", "tt0245825", "tt2126282", "tt0363409", "tt3848888", "tt4262516", "tt2727028", "tt4332114", "tt10199974", "tt10731264", "tt1227762", "tt0814014", "tt4467262", "tt10916102", "tt0252277", "tt0362696", "tt1392744", "tt1099196", "tt1869296", "tt3734580", "tt6978268", "tt0248216", "tt1174041", "tt0435437", "tt3368222", "tt1183946", "tt5697870", "tt1830786", "tt2796318", "tt0310254", "tt5943306", "tt1242530", "tt5785116", "tt0347779", "tt0337971", "tt3726012", "tt8011276", "tt6102396", "tt0347416", "tt6514010", "tt3611266", "tt7607940", "tt1727535", "tt0295682", "tt0499041", "tt0293342", "tt1182884", "tt2094854", "tt1176960", "tt2679480", "tt1883121", "tt1890513", "tt0267363", "tt1451797", "tt0422236", "tt8426854", "tt4979082", "tt0449228", "tt6078866", "tt6296236", "tt1039995", "tt1060249", "tt11102314", "tt2429640", "tt8108208", "tt5050788", "tt2357489", "tt1120897", "tt0808306", "tt0363472", "tt1191138", "tt14091818", "tt4675030", "tt0247911", "tt0985636", "tt0346507", "tt0490170", "tt1890363", "tt1034449", "tt8983168", "tt0338490", "tt8852558", "tt4545630", "tt0278522", "tt0328671", "tt0475645", "tt1706317", "tt0218533", "tt0369637", "tt5745450", "tt0892874", "tt7822758", "tt0300028", "tt13698928", "tt2437954", "tt0364621", "tt1738293", "tt0356982", "tt0860454", "tt8458202", "tt0485513", "tt1887763", "tt0347167", "tt4354740", "tt0322653", "tt3224288", "tt2573750", "tt1558578", "tt0383975", "tt3619772", "tt0477857", "tt8304386", "tt9495690", "tt7820846", "tt0348843", "tt8698956", "tt1263679", "tt0420304", "tt0907674", "tt1170404", "tt0379375", "tt1606267", "tt1114725", "tt1182908", "tt0297241", "tt2137241", "tt5997928", "tt1455816", "tt0250483", "tt0347278", "tt9176086", "tt0488381", "tt1753640", "tt0268401", "tt0476649", "tt1179782", "tt6711660", "tt0457802", "tt8484942", "tt0451983", "tt1828289", "tt8747548", "tt13491620", "tt0327071", "tt0493437", "tt0454431", "tt0493417", "tt5742874", "tt0250690", "tt0271748", "tt1322257", "tt0437182", "tt0872190", "tt0423087", "tt6537508", "tt2063745", "tt3514330", "tt5983262", "tt2423132", "tt4699202", "tt0306855", "tt1239276", "tt3848938", "tt0983990", "tt2064816", "tt0384491", "tt2510874", "tt0328729", "tt0255212", "tt2912578", "tt2222550", "tt0392883", "tt0341455", "tt5639388", "tt0444913", "tt2255934", "tt6265988", "tt1397492", "tt0255305", "tt6173826", "tt12969078", "tt4338154", "tt0443331", "tt0244528", "tt0430381", "tt4940456", "tt0422950", "tt0349703", "tt0328998", "tt0489486", "tt4500734", "tt6747420", "tt3501994", "tt3290688", "tt12929738", "tt1190894", "tt1194236", "tt12758600", "tt1172587", "tt0385351", "tt0824375", "tt0289845", "tt0995840", "tt0330217", "tt7463730", "tt0457875", "tt6058394", "tt0459293", "tt11730940", "tt0203289", "tt0314006", "tt4949324", "tt4024944", "tt0287537", "tt0284083", "tt0477253", "tt0823451", "tt3823392", "tt0819810", "tt5638500", "tt0396563", "tt3645014", "tt2404027", "tt2976176", "tt3004774", "tt3547616", "tt1522329", "tt0255713", "tt0831840", "tt5472700", "tt0397882", "tt11163028", "tt0382385", "tt1183917", "tt5325684", "tt6352548", "tt6545212", "tt8569206", "tt6620324", "tt1918927", "tt9000388", "tt0338477", "tt0387989", "tt0456413", "tt5805252", "tt4857886", "tt2861320", "tt1020978", "tt9875128", "tt0409527", "tt1050739", "tt0320097", "tt1941638", "tt2202086", "tt6180274", "tt0364303", "tt4990516", "tt0444849", "tt2614722", "tt9766294", "tt0255112", "tt11231440", "tt1937092", "tt1939654", "tt2171454", "tt0833561", "tt0438875", "tt0411815", "tt12505468", "tt0247944", "tt6275262", "tt8785426", "tt1267500", "tt0308347", "tt2622130", "tt4486148", "tt1227524", "tt1637691", "tt6467738", "tt7881542", "tt1245774", "tt0313844", "tt1156148", "tt3636776", "tt0305173", "tt3044882", "tt3886444", "tt8706884", "tt10017956", "tt1340778", "tt12642180", "tt0454435", "tt0263491", "tt5717110", "tt1016159", "tt7881524", "tt0813996", "tt8476998", "tt1202517", "tt3422462", "tt0366985", "tt0476729", "tt0307116", "tt10196464", "tt5638474", "tt0284328", "tt1343362", "tt9343754", "tt0857381", "tt10519182", "tt0331216", "tt2191721", "tt0326600", "tt10230436", "tt0331851", "tt5755606", "tt0251756", "tt6613812", "tt11964084", "tt1179781", "tt0349878", "tt0473567", "tt9766310", "tt0995827", "tt4228746", "tt7609114", "tt7549484", "tt0430589", "tt0813540", "tt0833484", "tt0475627", "tt10671436", "tt2857500", "tt0476848", "tt6958030", "tt1773042", "tt13773882", "tt2198235", "tt8130558", "tt1170399", "tt1047459", "tt0250452", "tt1327833", "tt2187972", "tt8427036", "tt1573482", "tt6978954", "tt0444874", "tt0377340", "tt0408976", "tt3683702"];
var teluguMovie = ["tt3040964", "tt2631186", "tt4849438", "tt2375559", "tt0430912", "tt2258337", "tt7294534", "tt1029231", "tt7392212", "tt1447500", "tt6836936", "tt6980546", "tt0816258", "tt1756476", "tt0471571", "tt6299040", "tt5071886", "tt4727512", "tt4107858", "tt8590896", "tt7059844", "tt7465992", "tt6903440", "tt2071613", "tt8948790", "tt6522546", "tt5098128", "tt10214826", "tt3142764", "tt0843326", "tt0366840", "tt9537292", "tt3042926", "tt4921860", "tt7758160", "tt1582519", "tt8269248", "tt1649431", "tt7765910", "tt5297256", "tt2211173", "tt7283064", "tt8388508", "tt5824826", "tt5946852", "tt8333978", "tt11385128", "tt6027478", "tt2304655", "tt4442758", "tt7794524", "tt1526323", "tt5323640", "tt10773090", "tt1191121", "tt0431619", "tt2198161", "tt4744086", "tt1417299", "tt6861726", "tt4271820", "tt7391996", "tt2330927", "tt1214961", "tt11306376", "tt5504168", "tt5457772", "tt8411144", "tt8302382", "tt5039054", "tt1579592", "tt10545484", "tt1613040", "tt0258490", "tt2204243", "tt13097434", "tt7797658", "tt2469980", "tt1664809", "tt0311594", "tt4596814", "tt0843328", "tt1183907", "tt1661031", "tt0858492", "tt7159382", "tt3810932", "tt6734984", "tt2988020", "tt4337414", "tt2091384", "tt0924317", "tt0355742", "tt11490170", "tt3996396", "tt4992086", "tt6054058", "tt1890493", "tt8737614", "tt9605894", "tt1852036", "tt1583256", "tt1533748", "tt11773456", "tt11469744", "tt13242960", "tt5457722", "tt5137380", "tt0928152", "tt0455663", "tt2440354", "tt8047208", "tt9675464", "tt1602585", "tt9742334", "tt2807410", "tt1601792", "tt6727296", "tt8733898", "tt2098782", "tt3681422", "tt7711342", "tt1361809", "tt8361196", "tt6996016", "tt2327239", "tt0491775", "tt1869226", "tt1603362", "tt2714622", "tt1198349", "tt1727535", "tt1830477", "tt0375066", "tt8108034", "tt9633480", "tt1582546", "tt0807943", "tt2287973", "tt10991188", "tt2357489", "tt5892746", "tt7705790", "tt1582466", "tt4545630", "tt0319557", "tt2677064", "tt11199356", "tt4515070", "tt5684466", "tt7822758", "tt11323316", "tt7387300", "tt8665746", "tt8188610", "tt0361037", "tt1194104", "tt7471004", "tt0467003", "tt6522398", "tt5457840", "tt5832544", "tt3802668", "tt4937812", "tt8490894", "tt6494052", "tt9348296", "tt0857300", "tt8072400", "tt2294567", "tt0326746", "tt2856674", "tt1105721", "tt5815940", "tt7884228", "tt7516778", "tt1625856", "tt0954914", "tt9165332", "tt4417510", "tt9558468", "tt0247945", "tt5038448", "tt2265381", "tt3916762", "tt1525323", "tt0907619", "tt0843372", "tt0368896", "tt1283956", "tt7317482", "tt1150946", "tt5177824", "tt0408181", "tt1318035", "tt8043092", "tt3885714", "tt0473604", "tt1889440", "tt0843335", "tt9239882", "tt0464162", "tt13485172", "tt7322850", "tt2846134", "tt11199310", "tt8661814", "tt3725026", "tt0460394", "tt12851324", "tt0422908", "tt2889234", "tt1582604", "tt0307541", "tt13209832", "tt2238837", "tt1308015", "tt11506054", "tt3835608", "tt8688912", "tt3230300", "tt3353850", "tt11773276", "tt0813548", "tt5340522", "tt7335186", "tt0439869", "tt5980232", "tt7249854", "tt3657434", "tt0366180", "tt3916700", "tt0437084", "tt2393775", "tt3949630", "tt0907106", "tt0929620", "tt8042248", "tt6258486", "tt0445033", "tt5638270", "tt11354726", "tt11433696", "tt6417204", "tt0925130", "tt0376787", "tt12747588", "tt14097376", "tt5642720", "tt7684228", "tt2767354", "tt0925058", "tt0924274", "tt2654480", "tt5712058", "tt6613470", "tt1582641", "tt0483999", "tt1285131", "tt0907618", "tt10133300", "tt2088847", "tt7853292", "tt1230544", "tt1305803", "tt11503178", "tt4980272", "tt8093952", "tt0383702", "tt9664732", "tt3215518", "tt7770192", "tt1473105", "tt0316062", "tt14039792", "tt4112334", "tt9077528"];
var tamilMovie = ["tt0222012", "tt0242256", "tt0242572", "tt0262037", "tt0294264", "tt0307873", "tt0308280", "tt0312859", "tt0326746", "tt0329393", "tt0330977", "tt0357905", "tt0361818", "tt0362548", "tt0364647", "tt0367495", "tt0373733", "tt0375571", "tt0375878", "tt0375880", "tt0375997", "tt0376076", "tt0376127", "tt0376144", "tt0385928", "tt0386650", "tt0411131", "tt0417241", "tt0422320", "tt0422689", "tt0422908", "tt0422934", "tt0423470", "tt0432637", "tt0439418", "tt0439714", "tt0442781", "tt0449869", "tt0449951", "tt0453190", "tt0453201", "tt0453740", "tt0455309", "tt0455767", "tt0455829", "tt0458050", "tt0459449", "tt0459516", "tt0460976", "tt0464071", "tt0464106", "tt0464162", "tt0475756", "tt0476706", "tt0479651", "tt0479751", "tt0769499", "tt0787524", "tt0807944", "tt0881894", "tt0888503", "tt0920457", "tt0948462", "tt0954914", "tt0959285", "tt10055770", "tt10189514", "tt1029231", "tt10334602", "tt1034053", "tt10370116", "tt10370932", "tt1039952", "tt10431010", "tt10468636", "tt10556036", "tt10579952", "tt10594792", "tt10687070", "tt10692888", "tt10709404", "tt10711648", "tt10750020", "tt11143108", "tt11199310", "tt11311958", "tt11323316", "tt11497402", "tt11502940", "tt11581174", "tt11581264", "tt11640022", "tt11731768", "tt1180583", "tt1183917", "tt1228931", "tt1267500", "tt1305797", "tt1308015", "tt13087958", "tt1311638", "tt13350412", "tt1355546", "tt1365030", "tt1379228", "tt1382339", "tt1385824", "tt1388444", "tt1417299", "tt1421036", "tt1436481", "tt1451409", "tt1451763", "tt1483820", "tt1483821", "tt1496380", "tt1496729", "tt1496832", "tt1496872", "tt1501298", "tt1507005", "tt1512888", "tt1526875", "tt1537032", "tt1570732", "tt1582466", "tt1606183", "tt1609168", "tt1650433", "tt1655607", "tt1664806", "tt1670635", "tt1705772", "tt1712057", "tt1720047", "tt1725795", "tt1727535", "tt1728239", "tt1787988", "tt1806959", "tt1821317", "tt1821478", "tt1821607", "tt1843335", "tt1851988", "tt1857670", "tt1891755", "tt1922545", "tt1954206", "tt1956697", "tt1965272", "tt1997455", "tt1999910", "tt2002868", "tt2032557", "tt2034026", "tt2065924", "tt2072167", "tt2088847", "tt2112124", "tt2146960", "tt2152896", "tt2180477", "tt2187153", "tt2199711", "tt2238837", "tt2246837", "tt2258337", "tt2262126", "tt2271641", "tt2275794", "tt2302966", "tt2309600", "tt2331167", "tt2339505", "tt2342227", "tt2344672", "tt2355791", "tt2359201", "tt2367996", "tt2401585", "tt2404801", "tt2542406", "tt2555958", "tt2564144", "tt2617676", "tt2624704", "tt2631186", "tt2638104", "tt2677064", "tt2678948", "tt2778674", "tt2793930", "tt2877104", "tt2877108", "tt2889234", "tt2922382", "tt3040964", "tt3056436", "tt3061202", "tt3107246", "tt3182644", "tt3185772", "tt3203910", "tt3215258", "tt3215518", "tt3219268", "tt3232156", "tt3320578", "tt3426262", "tt3465996", "tt3540016", "tt3563156", "tt3565264", "tt3569782", "tt3595298", "tt3681422", "tt3681442", "tt3711164", "tt3725026", "tt3801314", "tt3803860", "tt3822388", "tt3822396", "tt3962184", "tt3973410", "tt4020624", "tt4047104", "tt4047112", "tt4082068", "tt4107858", "tt4186118", "tt4258292", "tt4271820", "tt4290746", "tt4328798", "tt4328934", "tt4415326", "tt4429128", "tt4446258", "tt4446318", "tt4701688", "tt4741412", "tt4744086", "tt4806232", "tt4849438", "tt4859246", "tt4921860", "tt4937812", "tt4987556", "tt4991384", "tt5039054", "tt5071886", "tt5080556", "tt5124096", "tt5128266", "tt5128328", "tt5178278", "tt5200962", "tt5285050", "tt5297256", "tt5310090", "tt5323640", "tt5371168", "tt5372466", "tt5440700", "tt5455344", "tt5457722", "tt5459644", "tt5477194", "tt5483626", "tt5491920", "tt5523174", "tt5556784", "tt5559528", "tt5611648", "tt5673792", "tt5849148", "tt5857968", "tt5867800", "tt5892746", "tt5902484", "tt5934894", "tt5935704", "tt5959700", "tt5959980", "tt5963218", "tt5980232", "tt5985720", "tt6067752", "tt6076366", "tt6126294", "tt6148156", "tt6186910", "tt6201292", "tt6237966", "tt6270936", "tt6317052", "tt6340112", "tt6348454", "tt6380520", "tt6485666", "tt6522546", "tt6594758", "tt6615894", "tt6712026", "tt6727296", "tt6734886", "tt6747242", "tt6863784", "tt6878378", "tt6903440", "tt6929642", "tt7010156", "tt7019812", "tt7019820", "tt7019942", "tt7059844", "tt7060344", "tt7060460", "tt7161122", "tt7179714", "tt7179784", "tt7190460", "tt7221634", "tt7257586", "tt7280786", "tt7317482", "tt7329602", "tt7387300", "tt7465992", "tt7471004", "tt7510798", "tt7715202", "tt7719976", "tt7725626", "tt7738784", "tt7794052", "tt7822438", "tt7822758", "tt7892050", "tt7986222", "tt8011328", "tt8023734", "tt8042248", "tt8042292", "tt8094252", "tt8108034", "tt8176054", "tt8364418", "tt8411144", "tt8458718", "tt8733898", "tt8747560", "tt8944398", "tt8959820", "tt9049540", "tt9109794", "tt9110340", "tt9239882", "tt9260636", "tt9319874", "tt9477520", "tt9558612", "tt9605894", "tt9614988", "tt9635540", "tt9675716", "tt9900782"];
var marathiMovie = ["tt0261545", "tt0396962", "tt0396963", "tt0814209", "tt0832466", "tt0833444", "tt0833482", "tt0833510", "tt0833529", "tt0845554", "tt0984036", "tt0984056", "tt1003290", "tt10081402", "tt10209164", "tt10340618", "tt10419042", "tt1069262", "tt10706640", "tt10767976", "tt10897054", "tt10900124", "tt1122600", "tt11318044", "tt11423784", "tt11457262", "tt1149199", "tt11542194", "tt11880600", "tt1213838", "tt1483762", "tt1515210", "tt1524539", "tt1590129", "tt1630235", "tt1634331", "tt1653015", "tt1804604", "tt1822266", "tt1830802", "tt1906471", "tt1929373", "tt1984194", "tt2022444", "tt2085783", "tt2130033", "tt2196564", "tt2302945", "tt2321321", "tt2321421", "tt2321513", "tt2343847", "tt2391492", "tt2400377", "tt2400399", "tt2827320", "tt2878406", "tt2937158", "tt3021806", "tt3121604", "tt3341582", "tt3368378", "tt3410654", "tt3446426", "tt3645938", "tt3717068", "tt3817950", "tt3850798", "tt3867974", "tt3980868", "tt4019578", "tt4054936", "tt4203824", "tt4219894", "tt4471622", "tt4487548", "tt4580794", "tt4635162", "tt4654798", "tt4922810", "tt4932720", "tt4981664", "tt4992114", "tt5108764", "tt5125576", "tt5190944", "tt5190958", "tt5311546", "tt5312232", "tt5323386", "tt5494840", "tt5501124", "tt5599536", "tt5780076", "tt6009102", "tt6041344", "tt6129358", "tt6267944", "tt6555628", "tt6912552", "tt6963912", "tt7071382", "tt7148422", "tt7151480", "tt7155460", "tt7178026", "tt7367852", "tt7458920", "tt7568856", "tt7571148", "tt7679884", "tt7734662", "tt7748478", "tt7748494", "tt7773436", "tt7798984", "tt7867076", "tt8037610", "tt8237282", "tt8396120", "tt8396238", "tt8621438", "tt8784906", "tt8826936", "tt8852536", "tt8873348", "tt9024664", "tt9044650", "tt9130246", "tt9310280", "tt9319890", "tt9390200", "tt9642630", "tt9648668", "tt9680076"];
var malayalamMovie = ["tt0273870", "tt0298514", "tt0353725", "tt0357829", "tt0377575", "tt0425162", "tt0430710", "tt0449869", "tt0463622", "tt0483131", "tt0483180", "tt0867145", "tt0870195", "tt0887769", "tt0924213", "tt0973783", "tt10187680", "tt10452480", "tt10551608", "tt10608668", "tt10644282", "tt10717738", "tt10773090", "tt10976066", "tt11060730", "tt11112338", "tt1111914", "tt11230868", "tt11312700", "tt11322920", "tt11323316", "tt1138482", "tt11531530", "tt12361178", "tt12677092", "tt13103212", "tt13206926", "tt13299890", "tt1459027", "tt1539997", "tt1573478", "tt1667852", "tt1680306", "tt1695800", "tt1745863", "tt1821682", "tt1945039", "tt1988774", "tt2004191", "tt2078644", "tt2146836", "tt2218988", "tt2248028", "tt2265539", "tt2345561", "tt2363047", "tt2476214", "tt2522328", "tt2568760", "tt2577622", "tt2648034", "tt2678948", "tt2717168", "tt2787096", "tt2922382", "tt2924472", "tt2956300", "tt3005920", "tt3034728", "tt3040964", "tt3061202", "tt3198468", "tt3323920", "tt3387094", "tt3417422", "tt3465996", "tt3502488", "tt3506970", "tt3517192", "tt3661988", "tt3668162", "tt3734466", "tt3885736", "tt3895152", "tt3982468", "tt3995348", "tt4107858", "tt4110972", "tt4176604", "tt4186118", "tt4271820", "tt4384350", "tt4511460", "tt4557014", "tt4589628", "tt4679210", "tt4851630", "tt4888834", "tt4921860", "tt4928620", "tt4947084", "tt4961334", "tt5068280", "tt5071886", "tt5082670", "tt5214394", "tt5271432", "tt5297256", "tt5320514", "tt5320522", "tt5323568", "tt5324456", "tt5375324", "tt5376232", "tt5436158", "tt5436168", "tt5458088", "tt5548032", "tt5598764", "tt5642720", "tt5780034", "tt5821424", "tt5838806", "tt5889462", "tt5892746", "tt5906392", "tt5925772", "tt5996836", "tt5998104", "tt6010630", "tt6059074", "tt6067752", "tt6096884", "tt6097918", "tt6104268", "tt6109124", "tt6167894", "tt6168002", "tt6212984", "tt6221000", "tt6315524", "tt6363436", "tt6385856", "tt6409416", "tt6426832", "tt6502580", "tt6581440", "tt6615894", "tt6616800", "tt6649794", "tt6680730", "tt6707906", "tt6774106", "tt6789174", "tt6915596", "tt7117870", "tt7231194", "tt7231546", "tt7268736", "tt7317482", "tt7345930", "tt7355718", "tt7382730", "tt7387300", "tt7470414", "tt7523010", "tt7537738", "tt7548570", "tt7557024", "tt7581552", "tt7581572", "tt7585270", "tt7692434", "tt7919680", "tt8055888", "tt8081566", "tt8180482", "tt8188872", "tt8282830", "tt8286926", "tt8326824", "tt8413338", "tt8694228", "tt8721556", "tt9165806", "tt9264336", "tt9271408", "tt9526826", "tt9605894", "tt9793334", "tt9886872"];
var idx = 0;
var low = true;
var high = true;
var score = 0;
function higherLowerStarter(){
    idx = 0;
    low = true;
    high = true;
    score = 0;
    document.getElementById('score').innerHTML = score;
    var buttons = document.getElementsByClassName('gameAct');
    for (var i=0; i<buttons.length;i++){
        buttons[i].disabled = false;
    }
    startGame();
}
async function startGame(){
    // index = 0;
    let lang = document.getElementById('movieIndustry').value;
    if(lang=='hindi'){
        await helper(hindiMovie);
    }
    else if(lang=='marathi'){
        await helper(marathiMovie);
    }
    else if(lang=='malayalam'){
        await helper(malayalamMovie)
    }
    else if(lang=='telugu'){
        await helper(teluguMovie)
    }
    else if(lang=='tamil'){
        await helper(tamilMovie)
    }

}
async function helper(hindiMovie){
    var url = "https://www.omdbapi.com/?i=";
    var key = "&apikey=50026ec7";
    var max = hindiMovie.length;
        var output = await fetch(url+hindiMovie[idx]+key);
        var response = await output.json();
        setTimeout(()=>{
            document.getElementById('correctAns').style.visibility="hidden";
        },2000)
        document.getElementById('game1').setAttribute('src',response.Poster);
        document.getElementById('gametitle1').innerHTML = response.Title;
        document.getElementById('movieRating1').innerHTML = response.imdbRating;
        var r1 = response.imdbRating;
        var output = await fetch(url+hindiMovie[idx+1]+key);
        var response = await output.json();
        document.getElementById('game2').setAttribute('src',response.Poster);
        document.getElementById('gametitle2').innerHTML = response.Title;
        var r2 = response.imdbRating;
        console.log(r1,r2);
        if(r1>r2){
            low = true;
            high = false;
        }
        else if(r1==r2){
            low = true;
            high = true;
        }
        else{
            low = false;
            high = true;
        }
        console.log(low,high);
        idx++;
}
function lower(){
    console.log(low,high);
    if(low==true){
        score++;
        document.getElementById('score').innerHTML = score;
        document.getElementById('correctAns').style.visibility="visible";
        startGame();
    }
    else{
        gameOver();
    }
}
function higher(){
    console.log(low,high);
    if(high==true){
        score++;
        document.getElementById('score').innerHTML = score;
        document.getElementById('correctAns').style.visibility="visible";
        startGame();
    }
    else{
        gameOver();
    }
}
function gameOver(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.getElementById('finalscore').innerHTML=score;
    score = 0;
    idx = 0;
    document.getElementById('outer').style.display="block";
}

async function startGuessorGame(){
    let lang = document.getElementById('movieIndustry').value;
    const parent = document.getElementById("inputChecker");
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
    console.log(lang);
    if(lang=='hindi'){
        await helper2(hindiMovie);
    }
    else if(lang=='marathi'){
        await helper2(marathiMovie);
    }
    else if(lang=='malayalam'){
        await helper2(malayalamMovie)
    }
    else if(lang=='telugu'){
        await helper2(teluguMovie)
    }
    else if(lang=='tamil'){
        await helper2(tamilMovie)
    }
}
movieName = "";
temp = "";
maxScore = 100;
poster=""
async function helper2(arr){
    var max = arr.length-1;
    let idx = Math.floor(Math.random()*max);
    var url = "https://www.omdbapi.com/?i=";
    var key = "&apikey=50026ec7";
    var output = await fetch(url+arr[idx]+key);
    var response = await output.json();
    if(response.Plot.length<=2){
        helper2(arr);
        return;
    }
    document.getElementById('game1').setAttribute('src',"images/puzzle.png");
    document.getElementById('plotguessor').innerHTML = response.Plot;
    movieName = response.Title.toLowerCase();
    poster = response.Poster;
    maxScore = 0;
    console.log(movieName)
    temp = "";
    for(var i=0;i<movieName.length;i++){
        var char = movieName[i];
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            temp += movieName[i];
        }
        else if(char==" "){
            temp += "/"
        }
        else{
            temp+=' ';
            maxScore++;
        }
    }
    document.getElementById('attempt').innerHTML = maxScore;
    for(var i=0;i<movieName.length;i++){
        var element = document.createElement('input');
        element.value = temp[i];
        element.setAttribute('size','1');
        element.setAttribute('id',i+"");
        if(temp[i]!="_"){
            element.readOnly = true;
        }
        document.getElementById('inputChecker').append(element);
    }
}
function checkMovieName(){
    var x = document.getElementById('uranswer').value.toLowerCase();
    var flag = false;
    var curr = "";
    for(var i=0;i<movieName.length;i++){
        if(movieName[i]==x){
            document.getElementById(i+"").value = x;
            flag = true;
        }
        curr+=document.getElementById(i+"").value;
    }
    document.getElementById('uranswer').value = ""
    if(curr==movieName.replaceAll(' ','/')){
        document.getElementById("guessscore").innerHTML = parseInt(document.getElementById("guessscore").innerHTML)+maxScore;
        document.getElementById('game1').setAttribute('src',poster);
        setTimeout(()=>{
            startGuessorGame()
        },2000);
    }
    if(flag==false){
        maxScore--;
    }
    if(maxScore<=0){
        guessGameOver();
    }
    document.getElementById('attempt').innerHTML = maxScore;
}
function guessGameOver(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.getElementById("finalscore").innerHTML = parseInt(document.getElementById("guessscore").innerHTML)+maxScore;
    document.getElementById('outer').style.display="block";
}
function guessGameStarter(){
    document.getElementById("guessscore").innerHTML = '0';
    var buttons = document.getElementsByClassName('gameAct');
    for (var i=0; i<buttons.length;i++){
        buttons[i].disabled = false;
    }
    startGuessorGame();
}