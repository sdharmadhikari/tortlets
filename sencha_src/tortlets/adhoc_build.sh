BUILD_DIR=/tmp/SenchaTest
ARTIFACTS_DIR=$BUILD_DIR/artifacts
DIST_DIR=$BUILD_DIR/dist
IPA_FILE=Tortlets.ipa
 
echo Clearing build dir $BUILD_DIR...
rm -fr $BUILD_DIR/*
 
echo Creating artifacts dir $ARTIFACTS_DIR...
mkdir -p $ARTIFACTS_DIR
mkdir -p $ARTIFACTS_DIR/.sencha
 
echo Copying content of current dir to artifacts dir...
cp -R * $ARTIFACTS_DIR
cp -R .sencha/* $ARTIFACTS_DIR/.sencha
 
echo Changing into artifacts dir...
cd $ARTIFACTS_DIR
 
echo Invoking Sencha native build in current directory...
sencha app package build packager.ios.adhoc.json 
 
echo Changing into dist dir...
cd $DIST_DIR
 
echo Wrapping newly built .app into .ipa...
zip -r -q $IPA_FILE zipfile Payload
 
echo Done.
