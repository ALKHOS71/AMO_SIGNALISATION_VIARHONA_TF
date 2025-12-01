var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EPCIEtude_1 = new ol.format.GeoJSON();
var features_EPCIEtude_1 = format_EPCIEtude_1.readFeatures(json_EPCIEtude_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCIEtude_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCIEtude_1.addFeatures(features_EPCIEtude_1);
var lyr_EPCIEtude_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EPCIEtude_1, 
                style: style_EPCIEtude_1,
                popuplayertitle: 'EPCI Etude',
                interactive: true,
                title: '<img src="styles/legend/EPCIEtude_1.png" /> EPCI Etude'
            });
var format_Communes_2 = new ol.format.GeoJSON();
var features_Communes_2 = format_Communes_2.readFeatures(json_Communes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_2.addFeatures(features_Communes_2);
var lyr_Communes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_2, 
                style: style_Communes_2,
                popuplayertitle: 'Communes',
                interactive: false,
                title: '<img src="styles/legend/Communes_2.png" /> Communes'
            });
var format_Tracrabattementvlo_3 = new ol.format.GeoJSON();
var features_Tracrabattementvlo_3 = format_Tracrabattementvlo_3.readFeatures(json_Tracrabattementvlo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tracrabattementvlo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tracrabattementvlo_3.addFeatures(features_Tracrabattementvlo_3);
var lyr_Tracrabattementvlo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tracrabattementvlo_3, 
                style: style_Tracrabattementvlo_3,
                popuplayertitle: 'Tracé rabattement vélo',
                interactive: true,
                title: '<img src="styles/legend/Tracrabattementvlo_3.png" /> Tracé rabattement vélo'
            });
var format_Tracrabattementauto_4 = new ol.format.GeoJSON();
var features_Tracrabattementauto_4 = format_Tracrabattementauto_4.readFeatures(json_Tracrabattementauto_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tracrabattementauto_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tracrabattementauto_4.addFeatures(features_Tracrabattementauto_4);
var lyr_Tracrabattementauto_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tracrabattementauto_4, 
                style: style_Tracrabattementauto_4,
                popuplayertitle: 'Tracé rabattement auto',
                interactive: true,
                title: '<img src="styles/legend/Tracrabattementauto_4.png" /> Tracé rabattement auto'
            });
var format_Tracsdesitinrairesscurissdesortie_5 = new ol.format.GeoJSON();
var features_Tracsdesitinrairesscurissdesortie_5 = format_Tracsdesitinrairesscurissdesortie_5.readFeatures(json_Tracsdesitinrairesscurissdesortie_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tracsdesitinrairesscurissdesortie_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tracsdesitinrairesscurissdesortie_5.addFeatures(features_Tracsdesitinrairesscurissdesortie_5);
var lyr_Tracsdesitinrairesscurissdesortie_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tracsdesitinrairesscurissdesortie_5, 
                style: style_Tracsdesitinrairesscurissdesortie_5,
                popuplayertitle: 'Tracés des itinéraires sécurisés de sortie',
                interactive: true,
                title: '<img src="styles/legend/Tracsdesitinrairesscurissdesortie_5.png" /> Tracés des itinéraires sécurisés de sortie'
            });
var format_VIARHONAPROJETTRACE_6 = new ol.format.GeoJSON();
var features_VIARHONAPROJETTRACE_6 = format_VIARHONAPROJETTRACE_6.readFeatures(json_VIARHONAPROJETTRACE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIARHONAPROJETTRACE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIARHONAPROJETTRACE_6.addFeatures(features_VIARHONAPROJETTRACE_6);
var lyr_VIARHONAPROJETTRACE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIARHONAPROJETTRACE_6, 
                style: style_VIARHONAPROJETTRACE_6,
                popuplayertitle: 'VIARHONA - PROJET TRACE',
                interactive: false,
                title: '<img src="styles/legend/VIARHONAPROJETTRACE_6.png" /> VIARHONA - PROJET TRACE'
            });
var format_VIARHONA_7 = new ol.format.GeoJSON();
var features_VIARHONA_7 = format_VIARHONA_7.readFeatures(json_VIARHONA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIARHONA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIARHONA_7.addFeatures(features_VIARHONA_7);
var lyr_VIARHONA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIARHONA_7, 
                style: style_VIARHONA_7,
                popuplayertitle: 'VIARHONA',
                interactive: false,
                title: '<img src="styles/legend/VIARHONA_7.png" /> VIARHONA'
            });
var format_AiredaccueilprincipaleVIARHONA_8 = new ol.format.GeoJSON();
var features_AiredaccueilprincipaleVIARHONA_8 = format_AiredaccueilprincipaleVIARHONA_8.readFeatures(json_AiredaccueilprincipaleVIARHONA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AiredaccueilprincipaleVIARHONA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AiredaccueilprincipaleVIARHONA_8.addFeatures(features_AiredaccueilprincipaleVIARHONA_8);
var lyr_AiredaccueilprincipaleVIARHONA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AiredaccueilprincipaleVIARHONA_8, 
                style: style_AiredaccueilprincipaleVIARHONA_8,
                popuplayertitle: 'Aire d\'accueil principale VIARHONA',
                interactive: true,
                title: '<img src="styles/legend/AiredaccueilprincipaleVIARHONA_8.png" /> Aire d\'accueil principale VIARHONA'
            });
var format_PlesousitessignalsdepuisViaRhna_9 = new ol.format.GeoJSON();
var features_PlesousitessignalsdepuisViaRhna_9 = format_PlesousitessignalsdepuisViaRhna_9.readFeatures(json_PlesousitessignalsdepuisViaRhna_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlesousitessignalsdepuisViaRhna_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlesousitessignalsdepuisViaRhna_9.addFeatures(features_PlesousitessignalsdepuisViaRhna_9);
var lyr_PlesousitessignalsdepuisViaRhna_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlesousitessignalsdepuisViaRhna_9, 
                style: style_PlesousitessignalsdepuisViaRhna_9,
                popuplayertitle: 'Pôles ou sites signalés depuis ViaRhôna',
                interactive: true,
                title: '<img src="styles/legend/PlesousitessignalsdepuisViaRhna_9.png" /> Pôles ou sites signalés depuis ViaRhôna'
            });
var format_ProjetdesignalisationVIARHONA_10 = new ol.format.GeoJSON();
var features_ProjetdesignalisationVIARHONA_10 = format_ProjetdesignalisationVIARHONA_10.readFeatures(json_ProjetdesignalisationVIARHONA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjetdesignalisationVIARHONA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjetdesignalisationVIARHONA_10.addFeatures(features_ProjetdesignalisationVIARHONA_10);
var lyr_ProjetdesignalisationVIARHONA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjetdesignalisationVIARHONA_10, 
                style: style_ProjetdesignalisationVIARHONA_10,
                popuplayertitle: 'Projet de signalisation VIARHONA',
                interactive: true,
                title: '<img src="styles/legend/ProjetdesignalisationVIARHONA_10.png" /> Projet de signalisation VIARHONA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_EPCIEtude_1.setVisible(false);lyr_Communes_2.setVisible(false);lyr_Tracrabattementvlo_3.setVisible(true);lyr_Tracrabattementauto_4.setVisible(true);lyr_Tracsdesitinrairesscurissdesortie_5.setVisible(true);lyr_VIARHONAPROJETTRACE_6.setVisible(true);lyr_VIARHONA_7.setVisible(true);lyr_AiredaccueilprincipaleVIARHONA_8.setVisible(true);lyr_PlesousitessignalsdepuisViaRhna_9.setVisible(true);lyr_ProjetdesignalisationVIARHONA_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EPCIEtude_1,lyr_Communes_2,lyr_Tracrabattementvlo_3,lyr_Tracrabattementauto_4,lyr_Tracsdesitinrairesscurissdesortie_5,lyr_VIARHONAPROJETTRACE_6,lyr_VIARHONA_7,lyr_AiredaccueilprincipaleVIARHONA_8,lyr_PlesousitessignalsdepuisViaRhna_9,lyr_ProjetdesignalisationVIARHONA_10];
lyr_EPCIEtude_1.set('fieldAliases', {'NOM_EPCI': 'NOM_EPCI', });
lyr_Communes_2.set('fieldAliases', {'NOM_EPCI': 'NOM_EPCI', 'ID': 'ID', 'NOM': 'NOM', 'NOM_M': 'NOM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'POPULATION': 'POPULATION', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'SIREN_EPCI': 'SIREN_EPCI', });
lyr_Tracrabattementvlo_3.set('fieldAliases', {'GARE': 'GARE', 'TRAVAUX ?': 'TRAVAUX ?', 'JALONNEMEN': 'JALONNEMEN', 'REMARQUES': 'REMARQUES', 'SOURCE': 'SOURCE', 'VIARHON-VV': 'VIARHON-VV', 'OP EPCI': 'OP EPCI', 'OP TERRAIN': 'OP TERRAIN', });
lyr_Tracrabattementauto_4.set('fieldAliases', {'AIRE': 'AIRE', 'REMARQUES': 'REMARQUES', 'SOURCE': 'SOURCE', 'VIARHON-VV': 'VIARHON-VV', 'OPE': 'OPE', 'EXISTANT': 'EXISTANT', });
lyr_Tracsdesitinrairesscurissdesortie_5.set('fieldAliases', {'SITE SIGNA': 'SITE SIGNA', 'TRAVAUX': 'TRAVAUX', 'ANTENNE': 'ANTENNE', 'REMARQUES': 'REMARQUES', 'VARIANTE': 'VARIANTE', 'SOURCE': 'SOURCE', 'VIARHON-VV': 'VIARHON-VV', 'OP EPCI': 'OP EPCI', 'OP TERRAIN': 'OP TERRAIN', });
lyr_VIARHONAPROJETTRACE_6.set('fieldAliases', {'id': 'id', 'statut': 'statut', });
lyr_VIARHONA_7.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'id': 'id', });
lyr_AiredaccueilprincipaleVIARHONA_8.set('fieldAliases', {'NOM': 'NOM', 'PARKING VL': 'PARKING VL', 'NIVEAU': 'NIVEAU', 'RABATTEMEN': 'RABATTEMEN', 'TYPE AIRE': 'TYPE AIRE', });
lyr_PlesousitessignalsdepuisViaRhna_9.set('fieldAliases', {'Nom': 'Nom', 'CC': 'CC', 'Commune': 'Commune', 'HIERARCHIS': 'HIERARCHIS', 'SUR VIARHO': 'SUR VIARHO', 'AMGT ?': 'AMGT ?', });
lyr_ProjetdesignalisationVIARHONA_10.set('fieldAliases', {'Identifian': 'Identifian', 'Ordre': 'Ordre', 'SCHEMA_DIR': 'SCHEMA_DIR', 'PROJET_DE_': 'PROJET_DE_', 'EXISTANT__': 'EXISTANT__', 'Mise_en_œ': 'Mise_en_œ', 'Itinérair': 'Itinérair', 'Fonction_d': 'Fonction_d', 'Type_de_si': 'Type_de_si', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Départeme': 'Départeme', 'EPCI_impla': 'EPCI_impla', 'Commune_im': 'Commune_im', 'Voie_d_imp': 'Voie_d_imp', 'Gestionnai': 'Gestionnai', 'Zones_prot': 'Zones_prot', 'Autorités': 'Autorités', 'MONUMENTS_': 'MONUMENTS_', 'ARRETÉS_D': 'ARRETÉS_D', 'NATURA_200': 'NATURA_200', 'NATURA_2_1': 'NATURA_2_1', 'SITES_PATR': 'SITES_PATR', 'RÉSERVE_N': 'RÉSERVE_N', 'Photo_2022': 'Photo_2022', 'Photo_2025': 'Photo_2025', 'Lien_Photo': 'Lien_Photo', 'Identifi_1': 'Identifi_1', 'Code_carre': 'Code_carre', 'Code_mât': 'Code_mât', 'Code_lame': 'Code_lame', 'Sens_VIARH': 'Sens_VIARH', 'Type_panne': 'Type_panne', 'Panonceaux': 'Panonceaux', 'Idéogramm': 'Idéogramm', 'Mention_su': 'Mention_su', 'Distance__': 'Distance__', 'Mention_in': 'Mention_in', 'Distance_1': 'Distance_1', 'Mention__1': 'Mention__1', 'distance_2': 'distance_2', 'Etat': 'Etat', 'Remarques_': 'Remarques_', 'Site_signa': 'Site_signa', 'Type_signa': 'Type_signa', 'EPCI_Site_': 'EPCI_Site_', 'OPERATIONN': 'OPERATIONN', 'OPERATIO_1': 'OPERATIO_1', 'Site_sig_1': 'Site_sig_1', 'Type_sig_1': 'Type_sig_1', 'EPCI_Sit_1': 'EPCI_Sit_1', 'OPERATIO_2': 'OPERATIO_2', 'OPERATIO_3': 'OPERATIO_3', 'Site_sig_2': 'Site_sig_2', 'Type_sig_2': 'Type_sig_2', 'EPCI_Sit_2': 'EPCI_Sit_2', 'OPERATIO_4': 'OPERATIO_4', 'OPERATIO_5': 'OPERATIO_5', 'Site_sig_3': 'Site_sig_3', 'Type_sig_3': 'Type_sig_3', 'EPCI_Sit_3': 'EPCI_Sit_3', 'OPERATIO_6': 'OPERATIO_6', 'OPERATIO_7': 'OPERATIO_7', 'Site_sig_4': 'Site_sig_4', 'Type_sig_4': 'Type_sig_4', 'EPCI_Sit_4': 'EPCI_Sit_4', 'OPERATIO_8': 'OPERATIO_8', 'OPERATIO_9': 'OPERATIO_9', 'Site_sig_5': 'Site_sig_5', 'Type_sig_5': 'Type_sig_5', 'EPCI_Sit_5': 'EPCI_Sit_5', 'OPERATIO10': 'OPERATIO10', 'OPERATIO11': 'OPERATIO11', 'Type_pan_1': 'Type_pan_1', 'Typologie_': 'Typologie_', 'Sens_flèc': 'Sens_flèc', 'ID_SC2': 'ID_SC2', 'Logo_ViaRh': 'Logo_ViaRh', 'Logo_écha': 'Logo_écha', 'Mention_1': 'Mention_1', 'Km1': 'Km1', 'ID_site_si': 'ID_site_si', 'Mention_2': 'Mention_2', 'Km2': 'Km2', 'ID_site__1': 'ID_site__1', 'Mention_3': 'Mention_3', 'Km3': 'Km3', 'ID_site__2': 'ID_site__2', 'Mention_4': 'Mention_4', 'Km4': 'Km4', 'ID_site__3': 'ID_site__3', 'Support_ex': 'Support_ex', 'Dimension_': 'Dimension_', 'Couleur_su': 'Couleur_su', 'Couleur_do': 'Couleur_do', 'Dimensio_1': 'Dimensio_1', 'Dispositif': 'Dispositif', 'MAITRE_D_O': 'MAITRE_D_O', 'TYPE_D_INT': 'TYPE_D_INT', 'Dépose_su': 'Dépose_su', 'Pose_suppo': 'Pose_suppo', 'Pose_sup_1': 'Pose_sup_1', 'Dépose_Pa': 'Dépose_Pa', 'Repose_Pan': 'Repose_Pan', 'Pose_Panne': 'Pose_Panne', 'Dépose_Ma': 'Dépose_Ma', 'Pose_Marqu': 'Pose_Marqu', 'REMARQUE': 'REMARQUE', });
lyr_EPCIEtude_1.set('fieldImages', {'NOM_EPCI': 'TextEdit', });
lyr_Communes_2.set('fieldImages', {'NOM_EPCI': 'TextEdit', 'ID': 'TextEdit', 'NOM': 'TextEdit', 'NOM_M': 'TextEdit', 'INSEE_COM': 'TextEdit', 'STATUT': 'TextEdit', 'POPULATION': 'Range', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'SIREN_EPCI': 'TextEdit', });
lyr_Tracrabattementvlo_3.set('fieldImages', {'GARE': 'TextEdit', 'TRAVAUX ?': 'TextEdit', 'JALONNEMEN': 'TextEdit', 'REMARQUES': 'TextEdit', 'SOURCE': 'TextEdit', 'VIARHON-VV': 'TextEdit', 'OP EPCI': 'TextEdit', 'OP TERRAIN': 'TextEdit', });
lyr_Tracrabattementauto_4.set('fieldImages', {'AIRE': 'TextEdit', 'REMARQUES': 'TextEdit', 'SOURCE': 'TextEdit', 'VIARHON-VV': 'TextEdit', 'OPE': 'TextEdit', 'EXISTANT': 'TextEdit', });
lyr_Tracsdesitinrairesscurissdesortie_5.set('fieldImages', {'SITE SIGNA': 'TextEdit', 'TRAVAUX': 'TextEdit', 'ANTENNE': 'TextEdit', 'REMARQUES': 'TextEdit', 'VARIANTE': 'TextEdit', 'SOURCE': 'TextEdit', 'VIARHON-VV': 'TextEdit', 'OP EPCI': 'TextEdit', 'OP TERRAIN': 'TextEdit', });
lyr_VIARHONAPROJETTRACE_6.set('fieldImages', {'id': 'TextEdit', 'statut': '', });
lyr_VIARHONA_7.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'id': '', });
lyr_AiredaccueilprincipaleVIARHONA_8.set('fieldImages', {'NOM': 'TextEdit', 'PARKING VL': 'TextEdit', 'NIVEAU': 'TextEdit', 'RABATTEMEN': 'TextEdit', 'TYPE AIRE': 'TextEdit', });
lyr_PlesousitessignalsdepuisViaRhna_9.set('fieldImages', {'Nom': 'TextEdit', 'CC': 'TextEdit', 'Commune': 'TextEdit', 'HIERARCHIS': 'TextEdit', 'SUR VIARHO': 'TextEdit', 'AMGT ?': 'TextEdit', });
lyr_ProjetdesignalisationVIARHONA_10.set('fieldImages', {'Identifian': 'TextEdit', 'Ordre': 'TextEdit', 'SCHEMA_DIR': 'TextEdit', 'PROJET_DE_': 'TextEdit', 'EXISTANT__': 'TextEdit', 'Mise_en_œ': 'TextEdit', 'Itinérair': 'TextEdit', 'Fonction_d': 'TextEdit', 'Type_de_si': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Départeme': 'TextEdit', 'EPCI_impla': 'TextEdit', 'Commune_im': 'TextEdit', 'Voie_d_imp': 'TextEdit', 'Gestionnai': 'TextEdit', 'Zones_prot': 'TextEdit', 'Autorités': 'TextEdit', 'MONUMENTS_': 'TextEdit', 'ARRETÉS_D': 'TextEdit', 'NATURA_200': 'TextEdit', 'NATURA_2_1': 'TextEdit', 'SITES_PATR': 'TextEdit', 'RÉSERVE_N': 'TextEdit', 'Photo_2022': 'TextEdit', 'Photo_2025': 'TextEdit', 'Lien_Photo': 'TextEdit', 'Identifi_1': 'TextEdit', 'Code_carre': 'TextEdit', 'Code_mât': 'TextEdit', 'Code_lame': 'TextEdit', 'Sens_VIARH': 'TextEdit', 'Type_panne': 'TextEdit', 'Panonceaux': 'TextEdit', 'Idéogramm': 'TextEdit', 'Mention_su': 'TextEdit', 'Distance__': 'TextEdit', 'Mention_in': 'TextEdit', 'Distance_1': 'TextEdit', 'Mention__1': 'TextEdit', 'distance_2': 'TextEdit', 'Etat': 'TextEdit', 'Remarques_': 'TextEdit', 'Site_signa': 'TextEdit', 'Type_signa': 'TextEdit', 'EPCI_Site_': 'TextEdit', 'OPERATIONN': 'TextEdit', 'OPERATIO_1': 'TextEdit', 'Site_sig_1': 'TextEdit', 'Type_sig_1': 'TextEdit', 'EPCI_Sit_1': 'TextEdit', 'OPERATIO_2': 'TextEdit', 'OPERATIO_3': 'TextEdit', 'Site_sig_2': 'TextEdit', 'Type_sig_2': 'TextEdit', 'EPCI_Sit_2': 'TextEdit', 'OPERATIO_4': 'TextEdit', 'OPERATIO_5': 'TextEdit', 'Site_sig_3': 'TextEdit', 'Type_sig_3': 'TextEdit', 'EPCI_Sit_3': 'TextEdit', 'OPERATIO_6': 'TextEdit', 'OPERATIO_7': 'TextEdit', 'Site_sig_4': 'TextEdit', 'Type_sig_4': 'TextEdit', 'EPCI_Sit_4': 'TextEdit', 'OPERATIO_8': 'TextEdit', 'OPERATIO_9': 'TextEdit', 'Site_sig_5': 'TextEdit', 'Type_sig_5': 'TextEdit', 'EPCI_Sit_5': 'TextEdit', 'OPERATIO10': 'TextEdit', 'OPERATIO11': 'TextEdit', 'Type_pan_1': 'TextEdit', 'Typologie_': 'TextEdit', 'Sens_flèc': 'TextEdit', 'ID_SC2': 'TextEdit', 'Logo_ViaRh': 'TextEdit', 'Logo_écha': 'TextEdit', 'Mention_1': 'TextEdit', 'Km1': 'TextEdit', 'ID_site_si': 'TextEdit', 'Mention_2': 'TextEdit', 'Km2': 'TextEdit', 'ID_site__1': 'TextEdit', 'Mention_3': 'TextEdit', 'Km3': 'TextEdit', 'ID_site__2': 'TextEdit', 'Mention_4': 'TextEdit', 'Km4': 'TextEdit', 'ID_site__3': 'TextEdit', 'Support_ex': 'TextEdit', 'Dimension_': 'TextEdit', 'Couleur_su': 'TextEdit', 'Couleur_do': 'TextEdit', 'Dimensio_1': 'TextEdit', 'Dispositif': 'TextEdit', 'MAITRE_D_O': 'TextEdit', 'TYPE_D_INT': 'TextEdit', 'Dépose_su': 'TextEdit', 'Pose_suppo': 'TextEdit', 'Pose_sup_1': 'TextEdit', 'Dépose_Pa': 'TextEdit', 'Repose_Pan': 'TextEdit', 'Pose_Panne': 'TextEdit', 'Dépose_Ma': 'TextEdit', 'Pose_Marqu': 'TextEdit', 'REMARQUE': 'TextEdit', });
lyr_EPCIEtude_1.set('fieldLabels', {'NOM_EPCI': 'no label', });
lyr_Communes_2.set('fieldLabels', {'NOM_EPCI': 'no label', 'ID': 'no label', 'NOM': 'no label', 'NOM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'POPULATION': 'no label', 'INSEE_CAN': 'no label', 'INSEE_ARR': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'SIREN_EPCI': 'no label', });
lyr_Tracrabattementvlo_3.set('fieldLabels', {'GARE': 'header label - visible with data', 'TRAVAUX ?': 'header label - visible with data', 'JALONNEMEN': 'header label - visible with data', 'REMARQUES': 'header label - visible with data', 'SOURCE': 'header label - visible with data', 'VIARHON-VV': 'header label - visible with data', 'OP EPCI': 'header label - visible with data', 'OP TERRAIN': 'header label - visible with data', });
lyr_Tracrabattementauto_4.set('fieldLabels', {'AIRE': 'header label - visible with data', 'REMARQUES': 'header label - visible with data', 'SOURCE': 'header label - visible with data', 'VIARHON-VV': 'header label - visible with data', 'OPE': 'header label - visible with data', 'EXISTANT': 'header label - visible with data', });
lyr_Tracsdesitinrairesscurissdesortie_5.set('fieldLabels', {'SITE SIGNA': 'header label - visible with data', 'TRAVAUX': 'header label - visible with data', 'ANTENNE': 'header label - visible with data', 'REMARQUES': 'header label - always visible', 'VARIANTE': 'header label - visible with data', 'SOURCE': 'header label - visible with data', 'VIARHON-VV': 'header label - visible with data', 'OP EPCI': 'header label - visible with data', 'OP TERRAIN': 'header label - visible with data', });
lyr_VIARHONAPROJETTRACE_6.set('fieldLabels', {'id': 'no label', 'statut': 'no label', });
lyr_VIARHONA_7.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'id': 'no label', });
lyr_AiredaccueilprincipaleVIARHONA_8.set('fieldLabels', {'NOM': 'no label', 'PARKING VL': 'header label - visible with data', 'NIVEAU': 'header label - visible with data', 'RABATTEMEN': 'header label - visible with data', 'TYPE AIRE': 'inline label - visible with data', });
lyr_PlesousitessignalsdepuisViaRhna_9.set('fieldLabels', {'Nom': 'no label', 'CC': 'no label', 'Commune': 'no label', 'HIERARCHIS': 'header label - visible with data', 'SUR VIARHO': 'inline label - visible with data', 'AMGT ?': 'inline label - visible with data', });
lyr_ProjetdesignalisationVIARHONA_10.set('fieldLabels', {'Identifian': 'inline label - visible with data', 'Ordre': 'inline label - visible with data', 'SCHEMA_DIR': 'inline label - visible with data', 'PROJET_DE_': 'inline label - visible with data', 'EXISTANT__': 'inline label - visible with data', 'Mise_en_œ': 'inline label - visible with data', 'Itinérair': 'inline label - visible with data', 'Fonction_d': 'inline label - visible with data', 'Type_de_si': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Départeme': 'inline label - visible with data', 'EPCI_impla': 'inline label - visible with data', 'Commune_im': 'inline label - visible with data', 'Voie_d_imp': 'inline label - visible with data', 'Gestionnai': 'inline label - visible with data', 'Zones_prot': 'inline label - visible with data', 'Autorités': 'inline label - visible with data', 'MONUMENTS_': 'inline label - visible with data', 'ARRETÉS_D': 'inline label - visible with data', 'NATURA_200': 'inline label - visible with data', 'NATURA_2_1': 'inline label - visible with data', 'SITES_PATR': 'inline label - visible with data', 'RÉSERVE_N': 'inline label - visible with data', 'Photo_2022': 'inline label - visible with data', 'Photo_2025': 'inline label - visible with data', 'Lien_Photo': 'inline label - visible with data', 'Identifi_1': 'inline label - visible with data', 'Code_carre': 'inline label - visible with data', 'Code_mât': 'inline label - visible with data', 'Code_lame': 'inline label - visible with data', 'Sens_VIARH': 'inline label - visible with data', 'Type_panne': 'inline label - visible with data', 'Panonceaux': 'inline label - visible with data', 'Idéogramm': 'inline label - visible with data', 'Mention_su': 'inline label - visible with data', 'Distance__': 'inline label - visible with data', 'Mention_in': 'inline label - visible with data', 'Distance_1': 'inline label - visible with data', 'Mention__1': 'inline label - visible with data', 'distance_2': 'inline label - visible with data', 'Etat': 'inline label - visible with data', 'Remarques_': 'inline label - visible with data', 'Site_signa': 'inline label - visible with data', 'Type_signa': 'inline label - visible with data', 'EPCI_Site_': 'inline label - visible with data', 'OPERATIONN': 'inline label - visible with data', 'OPERATIO_1': 'inline label - visible with data', 'Site_sig_1': 'inline label - visible with data', 'Type_sig_1': 'inline label - visible with data', 'EPCI_Sit_1': 'inline label - visible with data', 'OPERATIO_2': 'inline label - visible with data', 'OPERATIO_3': 'inline label - visible with data', 'Site_sig_2': 'inline label - visible with data', 'Type_sig_2': 'inline label - visible with data', 'EPCI_Sit_2': 'inline label - visible with data', 'OPERATIO_4': 'inline label - visible with data', 'OPERATIO_5': 'inline label - visible with data', 'Site_sig_3': 'inline label - visible with data', 'Type_sig_3': 'inline label - visible with data', 'EPCI_Sit_3': 'header label - always visible', 'OPERATIO_6': 'inline label - visible with data', 'OPERATIO_7': 'inline label - visible with data', 'Site_sig_4': 'inline label - visible with data', 'Type_sig_4': 'inline label - visible with data', 'EPCI_Sit_4': 'inline label - visible with data', 'OPERATIO_8': 'inline label - visible with data', 'OPERATIO_9': 'inline label - visible with data', 'Site_sig_5': 'inline label - visible with data', 'Type_sig_5': 'inline label - visible with data', 'EPCI_Sit_5': 'inline label - visible with data', 'OPERATIO10': 'inline label - visible with data', 'OPERATIO11': 'inline label - visible with data', 'Type_pan_1': 'inline label - visible with data', 'Typologie_': 'inline label - visible with data', 'Sens_flèc': 'inline label - visible with data', 'ID_SC2': 'inline label - visible with data', 'Logo_ViaRh': 'inline label - visible with data', 'Logo_écha': 'inline label - visible with data', 'Mention_1': 'inline label - visible with data', 'Km1': 'inline label - visible with data', 'ID_site_si': 'inline label - visible with data', 'Mention_2': 'inline label - visible with data', 'Km2': 'inline label - visible with data', 'ID_site__1': 'inline label - visible with data', 'Mention_3': 'inline label - visible with data', 'Km3': 'inline label - visible with data', 'ID_site__2': 'inline label - visible with data', 'Mention_4': 'inline label - visible with data', 'Km4': 'inline label - visible with data', 'ID_site__3': 'inline label - visible with data', 'Support_ex': 'inline label - visible with data', 'Dimension_': 'inline label - visible with data', 'Couleur_su': 'inline label - visible with data', 'Couleur_do': 'inline label - visible with data', 'Dimensio_1': 'inline label - visible with data', 'Dispositif': 'inline label - visible with data', 'MAITRE_D_O': 'inline label - visible with data', 'TYPE_D_INT': 'inline label - visible with data', 'Dépose_su': 'inline label - visible with data', 'Pose_suppo': 'inline label - visible with data', 'Pose_sup_1': 'inline label - visible with data', 'Dépose_Pa': 'inline label - visible with data', 'Repose_Pan': 'inline label - visible with data', 'Pose_Panne': 'inline label - visible with data', 'Dépose_Ma': 'inline label - visible with data', 'Pose_Marqu': 'inline label - visible with data', 'REMARQUE': 'inline label - visible with data', });
lyr_ProjetdesignalisationVIARHONA_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});