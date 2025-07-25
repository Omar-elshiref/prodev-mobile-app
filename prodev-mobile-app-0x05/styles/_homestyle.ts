import { StyleSheet} from "react-native";

// const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  searchGroup: {
    backgroundColor: "#2DA38D", // اللون الأخضر الفاتح في الهيدر
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 20,
  },

  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  searchControlGroup: {
    flex: 1,
  },

  searchFormText: {
    color: "#555",
    fontSize: 13,
    marginBottom: 2,
  },

  searchControl: {
    fontSize: 14,
    color: "#333",
  },

  searchButton: {
    backgroundColor: "#FDA228", // زر البحث البرتقالي
    borderRadius: 12,
    padding: 10,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 18,
  },

  filterContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 64,
    height: 64,
  },

  listingContainer: {
    paddingHorizontal: 12,
    marginTop: 8,
  },

  paginationContainer: {
    marginTop: 16,
    marginBottom: 32,
    alignItems: "center",
  },

  showMoreButton: {
    backgroundColor: "#2DA38D",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },

  showMoreButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
