import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions, SafeAreaView, ScrollView, TextInput } from 'react-native';



const Screen_04 = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchFocused, setSearchFocused] = useState(false);
    const [medicines, setMedicines] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const API_URL = "http://10.0.2.2:3000/medicins";


        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setMedicines(data);
                setLoading(false);
            })
    }, []);

    const renderItem = useMemo(
        () =>
            ({ item }) =>
            (
                <View style={styles.card}>
                    {/* Với ảnh từ API: phải dùng { uri: item.image } */}
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Text style={styles.name}>{item.name}</Text>

                    {/* Price and Star Row */}
                    <View style={styles.priceStarContainer}>
                        <Text style={styles.price}>{item.price}</Text>
                        <Text style={styles.star}>{item.star}</Text>
                    </View>

                    <Text style={styles.description}>{item.description}</Text>
                    <TouchableOpacity>
                        <Text style={styles.readMore}>Read More →</Text>
                    </TouchableOpacity>
                </View>
            ),
        [] // dependency trống => chỉ tạo một lần
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                {/* Header */}
                <View style={styles.headerContainer}>
                    <View style={styles.header}>
                        <View style={[styles.searchBox, searchFocused && styles.inputContainerFocused]}>
                            <Image source={require('../assets/anh01.png')} style={styles.searchIcon} />
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Search here..."
                                value={searchQuery}
                                onFocus={() => setSearchFocused(true)}
                                onBlur={() => setSearchFocused(false)}
                                onChangeText={setSearchQuery}
                            />
                        </View>
                        <View style={styles.logoBackground}>
                            <Image source={require('../assets/anh02.png')} style={styles.logoicon} />
                        </View>
                    </View>
                </View>

                {/* Banner Component */}
                <View style={styles.bannerContainer}>
                    <Image source={require('../assets/anh03.png')} style={styles.banner} />
                    <View style={styles.bannerContent}>
                        <Text style={styles.bannerTitle}>Free Consultation</Text>
                        <Text style={styles.bannerText}>
                            Feel free to consult with one of our experienced {'\n'}
                            doctors for personalized advice.
                        </Text>
                        <TouchableOpacity style={styles.roundButton}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Title and Subtitle Section */}
                <View style={styles.titleSection}>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.greeting}>Hello, User!</Text>
                        <Text style={styles.subtitle}>We have some additional suggestions for you.</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.seeAll}>See All →</Text>
                    </TouchableOpacity>
                </View>

                {/* Main Content */}
                <ScrollView style={{ flex: 1 }}>
                    <FlatList
                        data={medicines}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        numColumns={3}
                        contentContainerStyle={styles.flatListContent}
                    />
                </ScrollView>

                {/* Footer */}
                <View style={styles.bottomNav}>
                    <TouchableOpacity style={styles.navItem}>
                        <Image source={require('../assets/anh09.png')} style={styles.navicon} />
                        <Text style={styles.navLabel}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Image source={require('../assets/anh10.png')} style={styles.navicon} />
                        <Text style={styles.navLabel}>Explore</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Image source={require('../assets/anh11.png')} style={styles.navicon} />
                        <Text style={styles.navLabel}>My Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Image source={require('../assets/anh12.png')} style={styles.navicon} />
                        <Text style={styles.navLabel}>Hospital</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Image source={require('../assets/anh13.png')} style={styles.navicon} />
                        <Text style={styles.navLabel}>Support</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Image source={require('../assets/anh14.png')} style={styles.navicon} />
                        <Text style={styles.navLabel}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    banner: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    bannerContent: {
        position: 'absolute',
        bottom: 10,
        left: 20,
    },
    bannerTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    bannerText: {
        color: '#fff',
        fontSize: 12,
        marginVertical: 5,
    },
    roundButton: {
        position: 'absolute',
        bottom: 10,
        right: -100,
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: '#007BFF',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        color: '#fff',
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerContainer: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logoBackground: {
        width: 30,
        height: 30,
        borderRadius: 25,
        backgroundColor: '#007BFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
    },
    logoicon: {
        width: 15,
        height: 15,
    },
    searchBox: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    inputContainerFocused: {
        borderColor: '#1f1f1f',
    },
    searchInput: {
        flex: 1,
        backgroundColor: 'transparent',
        marginLeft: 10,
    },
    searchIcon: {
        width: 20,
        height: 20,
    },
    titleSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
    },
    bannerContainer: {
        position: 'relative',
        width: '100%',
        height: 150,
        marginBottom: 20,
    },
    subtitleContainer: {
        flex: 1,
        marginRight: 10,
    },
    greeting: {
        color: '#1a73e8',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        color: '#555',
    },
    seeAll: {
        color: '#1a73e8',
        fontSize: 16,
    },
    flatListContent: {
        padding: 10,
    },
    card: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#f5f5f5',
        alignItems: 'flex-start',
    },
    priceStarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 5,
        marginTop: 5,
    },
    image: {
        width: 155,
        height: 100,
        borderRadius: 8,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 14,
        color: '#1a73e8',
    },
    star: {
        fontSize: 14,
        color: '#f1c40f',
    },
    description: {
        fontSize: 12,
        color: '#888',
        marginVertical: 4,
    },
    readMore: {
        color: '#1a73e8',
        fontWeight: 'bold',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 25,
    },
    navItem: {
        alignItems: 'center',
    },
    navLabel: {
        color: 'black',
        fontSize: 10,
        marginTop: 4,
    },
    navicon: {
        width: 20,
        height: 20,
    }
});

export default Screen_04;
