<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="en" sourcelanguage="en">
<context>
    <name>MobilityAreas</name>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="44"/>
        <source>Zones</source>
        <translation></translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="45"/>
        <source>Zone Id</source>
        <translation></translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="46"/>
        <source>Zone label</source>
        <translation></translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="47"/>
        <source>Origin/Destination file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="48"/>
        <source>Origin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="49"/>
        <source>Destination</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="50"/>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="51"/>
        <source>Field separator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="52"/>
        <source>Minimum pole size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="53"/>
        <source>Max aggregation size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="54"/>
        <source>Maximum link</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="55"/>
        <source>Output</source>
        <translation></translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="94"/>
        <source>step;zone;pole;link;internal;total
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="101"/>
        <source>Generating neighbourhood table...</source>
        <translation></translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="105"/>
        <source>Generating zones data...</source>
        <translation></translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="114"/>
        <source>Importing data...</source>
        <translation></translation>
    </message>
    <message>
        <location filename="MobilityAreas_algorithm.py" line="141"/>
        <source>Building cluster areas...</source>
        <translation></translation>
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
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MobilityAreasProvider</name>
    <message>
        <location filename="MobilityAreas_provider.py" line="78"/>
        <source>MobilityAreas</source>
        <translation></translation>
    </message>
</context>
</TS>
