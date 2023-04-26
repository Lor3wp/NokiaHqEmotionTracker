import calculateDistance from "../utils/CalculateDistance";

describe('calculateDistance', () => {
    it('calculates the distance between two points correctly', () => {
      // Test case 1
      expect(calculateDistance(60.221793, 24.755882)).toBe(0); // distance to Nokia HQ is 0 km
  
      // Test case 2
      expect(calculateDistance(60.224194, 24.753597)).toBeCloseTo(0.2, 0); // distance to Nokia HQ is approximately 0.273 km
  
      // Test case 3
      expect(calculateDistance(-34.603722, -58.381592)).toBeCloseTo(12712, -200); // distance to Nokia HQ from Buenos Aires is approximately 12712 km
    });
  });