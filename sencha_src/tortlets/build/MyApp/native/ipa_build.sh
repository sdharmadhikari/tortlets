rm -rf Payload/
mkdir Payload
cp -rf Tortlets.app Payload
zip -r -q Tortlets.ipa zipfile Payload
