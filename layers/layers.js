ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32748").setExtent([781989.824960, 9226959.356547, 802413.552571, 9244477.984972]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kota_BandungADMNew_1 = new ol.format.GeoJSON();
var features_Kota_BandungADMNew_1 = format_Kota_BandungADMNew_1.readFeatures(json_Kota_BandungADMNew_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_Kota_BandungADMNew_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kota_BandungADMNew_1.addFeatures(features_Kota_BandungADMNew_1);
var lyr_Kota_BandungADMNew_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kota_BandungADMNew_1, 
                style: style_Kota_BandungADMNew_1,
                popuplayertitle: 'Kota_Bandung-ADM-New',
                interactive: true,
    title: 'Kota_Bandung-ADM-New<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_0.png" /> Andir<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_1.png" /> Antapani<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_2.png" /> Arcamanik<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_3.png" /> Astana Anyar<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_4.png" /> Babakan Ciparay<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_5.png" /> Bandung Kidul<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_6.png" /> Bandung Kulon<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_7.png" /> Bandung Wetan<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_8.png" /> Batununggal<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_9.png" /> Bojongloa Kaler<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_10.png" /> Bojongloa Kidul<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_11.png" /> Buahbatu<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_12.png" /> Cibeunying Kaler<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_13.png" /> Cibeunying Kidul<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_14.png" /> Cibiru<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_15.png" /> Cicendo<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_16.png" /> Cidadap<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_17.png" /> Cimahi Utara<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_18.png" /> Cinambo<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_19.png" /> Coblong<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_20.png" /> Gedebage<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_21.png" /> Kiaracondong<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_22.png" /> Lengkong<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_23.png" /> Mandalajati<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_24.png" /> Panyileukan<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_25.png" /> Rancasari<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_26.png" /> Regol<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_27.png" /> Sukajadi<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_28.png" /> Sukasari<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_29.png" /> Sumur Bandung<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_30.png" /> Ujungberung<br />' });
var lyr_Clippedmask_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Clipped (mask)<br />\
    <img src="styles/legend/Clippedmask_2_0.png" /> 1<br />\
    <img src="styles/legend/Clippedmask_2_1.png" /> 2<br />\
    <img src="styles/legend/Clippedmask_2_2.png" /> 3<br />\
    <img src="styles/legend/Clippedmask_2_3.png" /> 4<br />\
    <img src="styles/legend/Clippedmask_2_4.png" /> 5<br />\
    <img src="styles/legend/Clippedmask_2_5.png" /> 6<br />\
    <img src="styles/legend/Clippedmask_2_6.png" /> 7<br />\
    <img src="styles/legend/Clippedmask_2_7.png" /> 8<br />\
    <img src="styles/legend/Clippedmask_2_8.png" /> 9<br />\
    <img src="styles/legend/Clippedmask_2_9.png" /> 10<br />\
    <img src="styles/legend/Clippedmask_2_10.png" /> 11<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Clippedmask_2.png",
            attributions: ' ',
            projection: 'EPSG:32748',
            alwaysInRange: true,
            imageExtent: [781140.000000, 9228750.000000, 802750.000000, 9243500.000000]
        })
    });

lyr_OSMStandard_0.setVisible(true);lyr_Kota_BandungADMNew_1.setVisible(true);lyr_Clippedmask_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Kota_BandungADMNew_1,lyr_Clippedmask_2];
lyr_Kota_BandungADMNew_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Kota_BandungADMNew_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Kota_BandungADMNew_1.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'REMARK': 'hidden field', 'LCODE': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Kota_BandungADMNew_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});