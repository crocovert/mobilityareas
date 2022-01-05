<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr_FR">
<context>
    <name>MobilityAreas</name>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="44"/>
        <source>Zones</source>
        <translation>Zones</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="45"/>
        <source>Zone Id</source>
        <translation>Identifiant de zone</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="46"/>
        <source>Zone label</source>
        <translation>Libellé de la zone</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="47"/>
        <source>Origin/Destination file</source>
        <translation>Fichier Origine/Destination</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="48"/>
        <source>Origin</source>
        <translation>Origine</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="49"/>
        <source>Destination</source>
        <translation>Destination</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="50"/>
        <source>Value</source>
        <translation>Valeur</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="51"/>
        <source>Field separator</source>
        <translation>Séparateur de champ</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="52"/>
        <source>Minimum pole size</source>
        <translation>Taille minimale des pôles</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="53"/>
        <source>Max aggregation size</source>
        <translation>Taille maximale des pôles pour agrégation</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="54"/>
        <source>Maximum link</source>
        <translation>Lien maximum pour agrégation</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="55"/>
        <source>Output</source>
        <translation>Résultat</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="94"/>
        <source>step;zone;pole;link;internal;total
</source>
        <translation>etape;zone;pole;lien;interne;total</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="101"/>
        <source>Generating neighbourhood table...</source>
        <translation>Génération de la table de voisinage...</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="105"/>
        <source>Generating zones data...</source>
        <translation>Génération des données de zones...</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="114"/>
        <source>Importing data...</source>
        <translation>Import des données...</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="141"/>
        <source>Building cluster areas...</source>
        <translation>Elaboration des bassins de mobilité...</translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="451"/>
        <source>
        Algorithm to build incrementally mobility cluster areas based on OD trips data between zones. 
        It aggregates successively zones that have the strongest link until it remains only one area
        The result is a polygon layer reresenting allz ones and areas aggregated in the processs with 
        their associated time of creation and time of deletion that allow animated maps from the different aggregation steps
        with the QGis time manager
        
        The tool needs a od trips data (txt file separated with &apos;;&apos;)
        A polygon layer (zones) with and Id that correspond to origin and destination Ids in the od trips data file
        
        Parameters:
            Zones&#xa0;: a polygon layer with a field containg the Id of zones
            Zone Id&#xa0;: zone Id field
            Zone label&#xa0;: zone label field (if no zone label , choose zone Id)
            Origin/destination file&#xa0;: OD trips data file. txt file with origin and destination fields corresponding to zone ID
            Origin: Name of the origin column
            Destination: name of the destination column
            Value: Name of the value column
            Field separator: Field separator . &apos;;&apos; by default
            Minimum pole size&#xa0;: the minimum size for becoming a pole
            Max agregation size: The maximum size to be able to be agregated
            Maximum link: A stop criteria on the maximum link (0.01 = 1% of the trips are going to the pole area)
            Ouput: The polygon layer result table (contains resultst from each step of the algorithm for further dynamic analysis with temporal manager)
            
        </source>
        <translation>        Algorithme pour construirer de manière itérative des bassins de mobilité à partir de données origine/destination entre zones
        Il agrège de manière itérative les zones qui ont la plus frte dépendance entre elles jusqu&apos;à ce qu&apos;il ne reste plus de zones à agréger
        Le résultat est une couches de polygones qui représentent les zones et bassins de mobilité  agrégés tout au long du processus
        avec comme données associées les heure de création et de supprression de chaque objets permettant de faire de cartes animées  en fonction de sdifférentes étapes
        avec le contrôleur temporel de Qgis
        The tool needs a od trips data (txt file separated with &apos;;&apos;)
        L&apos;outil nécessite de données de déplacements OD (fichier txt separaté avec &apos;;&apos;)
        Une couche de polygons (zones) contenant un identifiant correspondant à celui des origines et destination du fichier OD

        
        Paramètres:
            Zones : Une couche de polygones représentant les zones
            Identifiant de zone : Identifiant de zone
            Libellé de la zone : Libellé de la zone (si aucun prendre l&apos;identifiant de zone)
            Fichier Origine/destination file : Fichier txt des déplacements OD disposant d&apos;un champ correspondant à l&apos;identifiant de zone
            Origine: Nom de la colonne origin
            Destination: Nom de la colonne destination
            Valeur: Nom de la colonne valeur
            Séparateur de champ: Séparateur de champ &apos;;&apos; par défaut
            Taille minimale de pôle :La taille minimale pour être un pôle
            Minimum pole size : the minimum size for becoming a pole
            Taille maximale d&apos;agrégation: Taille maximale au delà de laquelle la zone ne pourra pas être agrégée
            Lien maximum: Un des critères d&apos;arrêt de l&apos;aortihme. Lien maximal en dessous duquel la zone ne peut être agrégée au pôle
            Résultat: La table de polygones résultat (contient les résultats de chaque étape de l&apos;algorithme pour une analyse future avec la manageur temporel de QGis)
            
        </translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="428"/>
        <source>Mobility Areas</source>
        <translation>Bassins de mobilité</translation>
    </message>
</context>
<context>
    <name>MobilityAreasProvider</name>
    <message>
        <location filename="MobilityAreas_provider.py" line="101"/>
        <source>Cerema</source>
        <translation>Cerema</translation>
    </message>
</context>
</TS>
