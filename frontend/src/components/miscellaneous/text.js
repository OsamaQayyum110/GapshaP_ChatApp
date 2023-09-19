const handleSearch = async (query) => {
  setSearch(query);
  if (!query) {
    return;
  }
  try {
    setLoading(true);

    const config = {
      headers: {
        Authoritzaion: `Bearer ${user.token}`,
      },
    };
    const  {data}  = await axios.get(`/api/user?search=${search}`, config);
    console.log(data);
    setLoading(false);
    setSearchResult(data);
  } catch (error) {
    toast({
      title: "Error Occured!",
      description: "Failed to Load the Search Results",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "bottom-left",
    });
  }
};
