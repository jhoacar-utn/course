STUDENT=pedro_perez; 
MERGED=jhoan_carrero; 
git checkout master; 
git checkout -b $STUDENT; 
git merge $MERGED; 
find ./utn -iname "$MERGED" | while read FILE; 
    do 
    NEW_FILE="$(sed -e "s/$MERGED/$STUDENT/" <<< $FILE)"; 
    mv "${FILE}" "${NEW_FILE}" ; 
    done; 
find ./utn -type f -exec sed -i "s/$MERGED/$STUDENT/g" {} \;