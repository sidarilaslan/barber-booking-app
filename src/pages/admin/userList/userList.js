import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { NativeBaseProvider, Input, SearchIcon } from 'native-base';
import useApiRequest from '../../../hooks/useApiRequest';
import UserCard from '../../../components/admin/userCard/userCard';
import styles from './userList.style'

const UserList = (props) => {
    const [data, setData] = useState([]);
    const [filteredUsers, setfilteredUsers] = useState(data);

    const [results, error, loading, useAxios] = useApiRequest();

    useEffect(() => {
        if (results?.data) {
            setData(results.data);
            setfilteredUsers(results.data);
        }
    }, [results?.data]);

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            useAxios({
                url: `http://10.0.2.2:5000/user?role=user`,
                method: 'get',
            });
        });
        return unsubscribe;
    }, []);

    const handleSearch = query => {
        const filtered = data.filter(filteredUsers => {
            const fullName = `${filteredUsers.name} ${filteredUsers.lastName}`;
            return fullName.toLowerCase().includes(query.toLowerCase());
        });

        setfilteredUsers(filtered);
    };

    const renderUserList = ({ item }) => (
        <UserCard
            customerFullName={`${item.name} ${item.lastName}`}
            onClick={() => {
                props.navigation.navigate('userDetailScreen', {
                    fullName: `${item.name} ${item.lastName}`,
                    phoneNumber: item.phoneNumber,
                    createdAt: item.createdAt,
                    id: item._id
                });
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
