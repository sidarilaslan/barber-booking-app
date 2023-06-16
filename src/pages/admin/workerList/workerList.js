import React, { useState, useEffect } from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    View,
} from 'react-native';
import { NativeBaseProvider, Input, SearchIcon } from 'native-base';
import useApiRequest from '../../../hooks/useApiRequest';
import styles from './workerList.style';
import UserCard from '../../../components/admin/userCard/userCard';

const UserList = ({ route, navigation }) => {
    const [data, setData] = useState([]);
    const [filteredUsers, setfilteredUsers] = useState(data);

    const [results, error, loading, useAxios] = useApiRequest();

    useEffect(() => {
        useAxios({
            url: `http://10.0.2.2:5000/worker`,
            method: 'get',
        });
    }, []);

    useEffect(() => {
        if (results?.data) {
            setData(results.data);
            setfilteredUsers(results.data);
        }
    }, [results?.data]);

    const handleSearch = query => {
        const filtered = data.filter(filteredUsers => {
            const fullName = `${filteredUsers.user_id.name} ${filteredUsers.user_id.lastName}`;
            return fullName.toLowerCase().includes(query.toLowerCase());
        });

        setfilteredUsers(filtered);

    };

    const renderUserList = ({ item }) => (
        <UserCard
            customerFullName={`${item.user_id.name} ${item.user_id.lastName}`}
            phoneNumber={item.user_id.phoneNumber}
            onClick={() => {
                console.log("clicked");
            }}
        />
    );

    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <Input
                    onChangeText={handleSearch}
                    placeholder="Kullanıcıyı Ara"
                    margin={4}
                    fontSize={16}
                    variant="filled"
                    borderRadius={10}
                    backgroundColor="#f1f1f1"
                    InputLeftElement={<SearchIcon marginLeft={4} size={6} />}
                />
                <FlatList data={filteredUsers} renderItem={renderUserList} />
            </View>
        </NativeBaseProvider>
    );
};

export default UserList;
