ID_RSA_FILE=$(grep ~/.ssh/config -e IdentityFile | awk '{print $NF}') 

if [ "$ID_RSA_FILE" = "~/.ssh/id_rsa_utn" ]; then
    NEW_RSA_FILE="~/.ssh/id_rsa"    
else
    NEW_RSA_FILE="~/.ssh/id_rsa_utn"    
fi

ID_RSA_FILE=$(echo "$ID_RSA_FILE" | sed 's/\//\\\//g')
NEW_RSA_FILE=$(echo "$NEW_RSA_FILE" | sed 's/\//\\\//g')

sed -i "s/$ID_RSA_FILE/$NEW_RSA_FILE/" ~/.ssh/config