STUDENT=user_test; 
EXISTING=jhoan_carrero; 
git checkout $EXISTING; 
git checkout -b $STUDENT; 
find ./utn -iname "$EXISTING" | while read FILE; 
    do 
    NEW_FILE="$(sed -e "s/$EXISTING/$STUDENT/" <<< $FILE)"; 
    mv "${FILE}" "${NEW_FILE}" ; 
    done; 
find ./utn -type f -exec sed -i "s/$EXISTING/$STUDENT/g" {} \;
find . -iname "*README*" -exec sed -i "s/$EXISTING/$STUDENT/g" {} \;